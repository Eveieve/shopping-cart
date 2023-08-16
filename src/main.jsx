import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import Header from "./components/HomePage/Header";

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
        path: "/cart",
        element: <CartPage />,
      },
    ]
  },
  {
    path: "/store",
    element: <StorePage />,
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-5"> 
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
