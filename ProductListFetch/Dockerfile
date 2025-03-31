FROM node:18-alpine AS build

#Set the working directory inside the container
WORKDIR /app

#Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./
RUN npm install

#Copy the entire project and build app
COPY . .
RUN npm run build

#use nginx for serving static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]