import { useContext } from "react";
import { ShopContext } from "../../App";

function CartPage() {

  const {fetchedData} = useContext(ShopContext);
  
  return <div >
    <div>{fetchedData.length}</div>
  </div>;
}

export default CartPage;
