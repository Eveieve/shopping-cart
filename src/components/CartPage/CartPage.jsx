import { useContext } from "react";
import { ShopContext } from "../../App";
import CartItem from "./CartItem";

function CartPage() {

  const {fetchedData, cartItems} = useContext(ShopContext);

  console.log(cartItems)

  const renderedItems = cartItems.map((item)=> {
    return <li>{item.title}</li>
  })

  return (
    <div>
    <h1>Review your bag.</h1>
    <button>Sign out</button>
    <p role="notice">Free delivery and free returns.</p>
    <div>{cartItems.length}</div>
    <div>{renderedItems}</div>
    <p role = "subtotal">SUBTOTAL</p>
    <p role = "shipping">SHIPPING</p>
    <p role = "total">TOTAL</p>
    <button role = "checkout">Checkout</button>
    </div>
  ) 
}

export default CartPage;
