import { useContext } from "react";
import { ShopContext } from "../../App";


function CartPage() {

  const {fetchedData, cartItems} = useContext(ShopContext);

console.log(cartItems)

  return <div>
    <div>{cartItems.length}</div>
  </div>;
}



export default CartPage;
