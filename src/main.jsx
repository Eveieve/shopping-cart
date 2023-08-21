import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import ProductPage from "./components/StorePage/ProductPage";
import HomePage from "./HomePage/HomePage";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home", 
        element: <HomePage/>
      }, 
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/store/:routeParams",
        element: <ProductPage/>,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-5"> 
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
