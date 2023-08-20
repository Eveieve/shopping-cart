import { useContext } from "react";
import { ShopContext } from "../../App";

function CartPage() {

  const {fetchedData, cartItems} = useContext(ShopContext);
  console.log(cartItems); // see if it's in there!

  return <div>
    <div>{fetchedData.length}</div>
  </div>;
}

export default CartPage;
