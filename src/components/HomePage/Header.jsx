// contains site's logo, name, navigation bar , search bar
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex ">
      <h1 className="text-3xl">Vintage shop</h1>
      <input type="text" placeholder="Search.." />
      <nav className="flex gap-2 flex-grow">
        <Link to="/home">home</Link>
        <Link to="/store">store</Link>
        <Link to="/cart">cart</Link>
      </nav>
    </div>
  );
}

export default Header;
