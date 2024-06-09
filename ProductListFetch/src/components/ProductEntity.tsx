import { Link } from "@tanstack/react-router"

export type Product={
    id:number
    title:string
    price:number
    category:string
    image:string
}

export type ProductProps={
    id:number
    title:string
    price:number
    category:string
    image:string
}

export type ProductDetailProps={
    id:number
    title:string
    price:number
    category:string
    image:string
    description:string
}

export default function ProductCard(product:ProductProps){
    return(
        <Link to="/item/$itemId" params={{itemId:String(product.id)}}>
            <div className="bg-white border-4
             border-x-gray-300        
             rounded-lg
             hover:scale-105 transform transition-transform duration-200 m-5 p-5 overflow-hidden w-48">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover"/>
                <div className="p-4">
                    <h3 className="text-sm mb-2 truncate">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="text-lg text-red-600">${product.price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    )
}