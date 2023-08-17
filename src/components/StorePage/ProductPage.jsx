import { useParams } from "react-router-dom";

function ProductPage(props) {

  const {id} = useParams();
  console.log(useParams())
 
console.log(props.fetchedData);
  return (
    <h1>This is a detail page for product {id}</h1>
  )

}

export default ProductPage;
