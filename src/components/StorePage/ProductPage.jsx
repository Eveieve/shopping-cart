import { useParams } from "react-router-dom";
import fetchData from "../custom-hooks/fetchData";

function ProductPage(props) {

  const {routeParams} = useParams();
  console.log(useParams()) // logs out fetchedData array! 
 
console.log(fetchData());
  return (
    <h1>This is a detail page for product {routeParams}</h1>
  )

}

export default ProductPage;
