import { useState } from "react"
import ProductCard, { ProductProps } from "./ProductEntity"

export default function ProductCardList(
    {products}:{products:ProductProps[]}
){
    const[searchQuery,setSearchQuery]=useState('')

    const handleSearchChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value)
    }

    const filteredProducts=searchQuery.trim()===""
    ?products
    :products.filter(product=>
        product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())|| 
        product.category.toLowerCase().includes(searchQuery.trim().toLowerCase())     
    )    

    return(
        <>
        <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-5 mt-5 ml-5 p-2 text-lg w-full max-w-md box-border border-2 border-blue-500 rounded focus: outline-blue-900">
        </input><br></br>
        
        <div className="flex flex-wrap gap-4 justify-center">          
        {filteredProducts.map((product)=>(
            <div key={product.id}>
                <ProductCard id={product.id} 
                title={product.title} 
                price={product.price} 
                category={product.category} 
                image={product.image}/>  
            </div>        
        ))}
        </div>
        </>
    )
}