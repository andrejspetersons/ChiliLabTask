import { createFileRoute } from '@tanstack/react-router'
import { getProductById } from '../../apicalls/requests'
import ProductCard from '../../components/ProductEntity'

export const Route = createFileRoute('/item/$itemId')({
  component:ItemDetail,
  loader: ({params})=>getProductById(Number(params.itemId))
})

function ItemDetail(){
  const {itemId}=Route.useParams()
  const item=Route.useLoaderData()
  return(
    <ProductCard
    id={Number(itemId)} 
    title={item.title} 
    price={Number(item.price.toFixed(2))} 
    category={item.category} 
    image={item.image}> 
    </ProductCard>  
  )
}