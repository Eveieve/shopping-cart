import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState, useEffect, createContext} from "react";

export const ShopContext = createContext({
  cartItems: [], 
  fetchedData:[],
  addToCart: ()=> {},
  // howMany: 0,
  // handleIncrement: ()=> {}, 
  // handleDecrement: ()=> {},
 
});

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  // const [howMany, setHowMany] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems)=>[
      ...prevItems,
      product,
    ])
    console.log(product);
  }
  
  // const handleIncrement = () => {
  //   setHowMany((prev)=> prev+1);
  // }

  // const handleDecrement = () => {
  //   if(howMany !== 0) 
  //  setHowMany((prev)=> prev-1)
  // }

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
  .finally(() => setLoading(false)); //when it's finally resolved! 
}, [])


  return (
      <ShopContext.Provider value = {{cartItems, fetchedData, addToCart}}>
      <Header />
      <Outlet />
      </ShopContext.Provider>
  );
}

export default App;
