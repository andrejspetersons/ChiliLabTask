import axios from "axios"
import { ProductProps } from "../components/ProductEntity"

const BASE_URL="https://fakestoreapi.com/products"
export async function getProducts():Promise<ProductProps[]>{
    const response=await axios.get<ProductProps[]>(BASE_URL)
    return response.data
}

export async function getProductById(id:number):Promise<ProductProps>{
    const response=await axios.get<ProductProps>(`${BASE_URL}/${id}`)
    return response.data
}