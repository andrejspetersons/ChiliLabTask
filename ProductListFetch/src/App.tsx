import { useEffect, useState } from 'react'
import './App.css'
import { getProducts } from './apicalls/requests'
import Pagination from './components/Pagination'
import { ProductProps } from './components/ProductEntity'
import ProductCardList from './components/ProductList'

function App() {
  const[items,setItems]=useState<ProductProps[]>([])
  const[currentPage,setCurrentPage]=useState(1)
  const[itemsPerPage]=useState(5)
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=async()=>{
    const data=await getProducts() as ProductProps[]
    setItems(data)
  }

  const paginate=(pageNumber:number)=>setCurrentPage(pageNumber)

  const indexOfLastItem=currentPage*itemsPerPage
  const indexOfFirstItem=indexOfLastItem-itemsPerPage
  const currentItems=items.slice(indexOfFirstItem,indexOfLastItem)
  

  return (
    <>
      <ProductCardList products={currentItems} ></ProductCardList>
      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} ></Pagination>
    </>
  )
}

export default App
