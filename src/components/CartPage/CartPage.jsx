import { useContext } from "react";
import { ShopContext } from "../../App";
import { Button } from "flowbite-react";

function CartPage() {

  const { cartItems, quantity} = useContext(ShopContext);

  console.log(cartItems)

  const renderedItems = cartItems.map((item)=> {
    return <li>{item.title}</li>
  })


  return (
    <div>
    <h1>Review your bag.</h1>
    <Button gradientDuoTone = "tealToLime" outline>Sign out</Button>
    <p role="notice">Free delivery and free returns.</p>
    <div>{cartItems.length}</div>
    <div>{renderedItems}</div>
    <p role = "subtotal">SUBTOTAL</p>
    <p role = "shipping">SHIPPING</p>
    <p role = "total">TOTAL</p>
    <Button gradientDuoTone = "tealToLime" role = "checkout">Checkout</Button>
    </div>
  ) 
}

export default CartPage;
