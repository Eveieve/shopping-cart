import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect, useContext , createContext} from "react";
import ProductPage from "./components/StorePage/ProductPage";
export const ShopContext = createContext({
  fetchedData: [], 
  cartItems: [],
});

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const [cartItems, setCartItems] = useState([]);

//   console.log(ShopContext)

// const products = products;
//   console.log(products); //null

  useEffect((routeParams = "") => {
  fetch(`https://fakestoreapi.com/products/${routeParams}`, {mode: "cors"})
  .then((res) => {
    if(res.status>=400) {
      throw new Error("server error");
    }
    return res.json()
  })
  .then((res) => {
    setFetchedData(res)
    console.log(res)
  })
  .catch((error) => setError(error))
  .finally(() => setLoading(false)); //when it's finally resolved! 

  
  // const products = 
}, [])
console.log(fetchedData);
// setCartItems(() => products);

  return (
    // <div>
      <ShopContext.Provider value = {{cartItems, fetchedData}}>
      <Header />
      <Outlet />
      {/* Footer component here  */}
      {/* <ProductPage /> */}
      </ShopContext.Provider>
    // </div>
  );
}

export default App;
