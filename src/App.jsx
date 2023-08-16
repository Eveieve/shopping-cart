import StorePage from "./components/StorePage";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>App page</div>

      <Link to="store">store</Link>
      <Link to="home">home</Link>
      <Link to="cart">cart</Link>
    </>
  );
}

export default App;
