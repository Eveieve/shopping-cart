import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect, createContext} from "react";
import MyCarousel from "./HomePage/MyCarousel";

export const ShopContext = createContext({
  cartItems: [], 
  fetchedData:[],
  addToCart: ()=> {},
 
});

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems)=>[
      ...prevItems,
      {
        ...product, 
        quantity: quantity,
      }
     
    ])
    console.log(cartItems);
  }
  

  useEffect((routeParams = "") => {
  fetch(`https://fakestoreapi.com/products/${routeParams}`, {mode: "cors"})
  .then((res) => {
    if(res.status>=400) {
      throw new Error("server error");
    }
    return res.json()
  })
  .then((res) => setFetchedData(res))
  .catch((error) => setError(error))
  .finally(() => setLoading(false));
}, [])


  return (
      <ShopContext.Provider value = {{cartItems, fetchedData, addToCart}}>
      <Header />
      <MyCarousel/>
      <Outlet />
      </ShopContext.Provider>
  );
}

export default App;
