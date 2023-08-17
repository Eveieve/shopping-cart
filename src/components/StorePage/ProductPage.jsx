import { useParams } from "react-router-dom";
import fetchData from "../custom-hooks/fetchData";


function ProductPage(props) {

  const {routeParams} = useParams();

  const {fetchedData : fetchedProduct, error, loading} = fetchData(routeParams);

  if(error) return <p>A network error was encountered!</p>
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="flex items-center justify-center w-3/6">
    <img src ={fetchedProduct.image} className="max-w-sm md:max-w-md"/>
    <p>${fetchedProduct.price}</p>
    <p>{fetchedProduct.description}</p>
   
    </div>
    </div>
  )

}

export default ProductPage;
