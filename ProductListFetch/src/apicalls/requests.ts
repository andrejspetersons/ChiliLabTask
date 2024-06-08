import axios from "axios";
import { ProductDetailProps, ProductProps } from "../components/ProductEntity";

const BASE_URL=import.meta.env.VITE_BASE_URL

export async function getProducts():Promise<ProductProps[]>{
    const response=await axios.get<ProductProps[]>(BASE_URL)
    return response.data
}

export async function getProductById(id:number):Promise<ProductDetailProps>{
    const response=await axios.get<ProductDetailProps>(`${BASE_URL}/${id}`)
    return response.data
}

