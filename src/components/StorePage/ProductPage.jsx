import { useParams } from "react-router-dom";
import fetchData from "../custom-hooks/fetchData";

function ProductPage(props) {

  const {routeParams} = useParams();

  console.log(fetchData());
const{fetchedData, error, loading} = fetchData();

if(error) return <p>A network error was encountered!</p>
if (loading) return <>Loading...</>;


const foundProduct = fetchedData.find((item)=> item.id == routeParams);

  return (
    <div>
    <h1>This is a detail page for product {routeParams}</h1>
    <img src ={foundProduct.image}/>
    <div>Description</div>
    </div>
  )

}

export default ProductPage;
