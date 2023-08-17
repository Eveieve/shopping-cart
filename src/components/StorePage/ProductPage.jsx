import { useParams } from "react-router-dom";
import fetchData from "../custom-hooks/fetchData";

function ProductPage(props) {

  const {routeParams} = useParams();


  const{fetchedData : fetchedProduct, error, loading} = fetchData(routeParams);

  console.log(fetchedProduct);

if(error) return <p>A network error was encountered!</p>
if (loading) return <>Loading...</>;


//const foundProduct = fetchedProduct.find((item)=> item.id == routeParams);

  return (
    <div className="flex basis-3/6 items-center justify-center">
    {/* <h1>This is a detail page for product {routeParams}</h1> */}
    <img src ={fetchedProduct.image} />
    <p>${fetchedProduct.price}</p>
    <p>{fetchedProduct.description}</p>
    </div>
  )

}

export default ProductPage;
