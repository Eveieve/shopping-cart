// contains site's logo, name, navigation bar , search bar
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";


function Header() {
  const {cartItems} = useContext(ShopContext); // passing ShopContext object
  
  return (
    <> 
    <div className="flex justify-between">
    <h1 className="text-3xl">Vintage shop</h1>
    <nav className="flex gap-9">
    <input type="text" placeholder="SEARCH" className="mx-10 p-2 border-solid border border-black"/>
        < Link to="/home">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/cart">CART</Link>
     <div>{cartItems.length}</div>
    </nav>
  </div>
    </>
  );
}

export default Header;
