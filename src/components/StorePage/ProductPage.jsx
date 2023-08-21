import { useParams } from "react-router-dom";
import { useState,useContext } from 'react';
import { ShopContext } from '../../App';
import AlertWithIcon from "../AlertWithIcon";
import {Button} from 'flowbite-react'
import Counter from './Counter'
function ProductPage() {

  const {routeParams} = useParams();
  
  const {fetchedData, addToCart, cartItems,} = useContext(ShopContext);
 
   const [isItemAdded, setIsItemAdded] = useState(false);

  const [howMany, setHowMany] = useState(0);

  const product = fetchedData.find((item)=> item.id == routeParams)
 
   const handleIncrement = () => {
    setHowMany((prev)=> prev+1);
  }

  const handleDecrement = () => {
    if(howMany !== 0) 
   setHowMany((prev)=> prev-1)
  }

  function showAlert(){
    setIsItemAdded(true);
    setTimeout(()=> setIsItemAdded(false), 1500)
  }
  
  return (
    <>
       {isItemAdded && <AlertWithIcon />}
    <div className="flex items-center justify-center h-screen">
      <h2>{product.title}</h2>
    <div className="flex items-center justify-center w-3/6">
    <img src ={product.image} className="max-w-sm md:max-w-md"/>
    <p >${product.price}</p>
    <p >{product.description}</p>
   <Counter howMany = {howMany} handleIncrement = {handleIncrement} handleDecrement={handleDecrement}/>
    <Button gradientDuoTone = "tealToLime" onClick = {()=>{addToCart(product); showAlert()}}>addToCart</Button>
    </div>
    </div>
    </>
  )
}

export default ProductPage;
