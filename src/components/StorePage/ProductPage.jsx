import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../../App';

function ProductPage() {

  const {routeParams} = useParams();
  
  const {fetchedData} = useContext(ShopContext);

  const product = fetchedData.find((item)=> item.id == routeParams)

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex items-center justify-center w-3/6">
    <img src ={product.image} className="max-w-sm md:max-w-md"/>
    <p>${product.price}</p>
    <p>{product.description}</p>
    </div>
    </div>
  )
}

export default ProductPage;
