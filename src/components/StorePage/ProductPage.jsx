import { useParams } from "react-router-dom";
//import fetchData from "../../fetchData";
import { useContext } from 'react';
import { ShopContext } from '../../App';

function ProductPage(props) {

  const {routeParams} = useParams();
  console.log(routeParams);
  const {fetchedData} = useContext(ShopContext);
  // const {fetchedData : product, error, loading} = fetchData(routeParams);
console.log(fetchedData);
  // if(error) return <p>A network error was encountered!</p>
  // if (loading) return <p>Loading...</p>;

  const product = fetchedData.find((item)=> item.id === routeParams)
  console.log(product);

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
