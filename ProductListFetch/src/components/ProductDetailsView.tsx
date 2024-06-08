import { ProductDetailProps } from "./ProductEntity";

export default function ProductCardDetails(product:ProductDetailProps) {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-lg">
        <div className="flex justify-center p-6">
          <img
            className="h-48 w-48 object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="px-6 pb-6">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            {product.title}
          </h3>
          <p className="text-gray-600 mt-2 text-center">${product.price}</p>
          <p className="text-gray-600 mt-2 capitalize text-center">
            {product.category}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>
        </div>
      </div>
    );
  }