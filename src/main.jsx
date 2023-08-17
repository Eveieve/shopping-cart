import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import Header from "./components/HomePage/Header";
import ProductPage from "./components/StorePage/ProductPage";
import SingleItem from "./components/StorePage/SingleItem";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/store",
        element: <StorePage />,
      },
      
      {
        path: "/store/:id",
        element: <ProductPage />,
      },
     
      {
        path: "/cart",
        element: <CartPage />,
      },
    ]
  },
  {
    path: "/home",
    element: <App />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-5"> 
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
