import { useParams } from "react-router-dom";

function ProductPage() {
  const {id} = useParams();
  console.log(useParams())
  console.log(id);

  return (
    <h1>This is a detail page for product {id}</h1>
  )

}

export default ProductPage;
