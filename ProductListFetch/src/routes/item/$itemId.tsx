import { createFileRoute } from '@tanstack/react-router'
import { getProductById } from '../../apicalls/requests'
import ProductCardDetails from '../../components/ProductDetailsView'

export const Route = createFileRoute('/item/$itemId')({
  component:ItemDetail,
  loader: ({params})=>getProductById(Number(params.itemId))
})

function ItemDetail(){
  const {itemId}=Route.useParams()
  const item=Route.useLoaderData()
  return(
    <ProductCardDetails id={Number(itemId)} 
    title={item.title} 
    price={item.price} 
    category={item.category} 
    image={item.image} 
    description={item.description}/>
  )
}