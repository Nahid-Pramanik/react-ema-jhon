import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './Loader/CartProductsLoader.js';
import Proceed from './components/Proceed/Proceed.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'proceed',
        element: <Proceed></Proceed>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
