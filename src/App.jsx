import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect, createContext} from "react";

export const ShopContext = createContext({
  cartItems: [], 
  fetchedData:[],
});

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const [cartItems, setCartItems] = useState([]);


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
}, [])


  return (
      <ShopContext.Provider value = {{cartItems, fetchedData}}>
      <Header />
      <Outlet />
      </ShopContext.Provider>
  );
}

export default App;
