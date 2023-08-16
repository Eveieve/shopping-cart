// contains site's logo, name, navigation bar , search bar
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl">Vintage shop</h1>
      <nav className="flex gap-9">
      <input type="text" placeholder="Search.." className="mx-10 p-2 w-25rem"/>

        <Link to="/home">HOME</Link>
        <Link to="/store">STORE</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </div>
  );
}

export default Header;
