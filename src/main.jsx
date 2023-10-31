import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/home/Home.jsx';
import Produto from "./pages/Produtos.jsx";
import Categoria from "./pages/Categorias.jsx";
import Pedido from "./pages/Pedidos.jsx";
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MenuBar from './components/header/MenuBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/produtos",
    element: <Produto/>,
  },
  {
    path: "/categorias",
    element: <Categoria/>,
  },
  {
    path: "/pedidos",
    element: <Pedido/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuBar />
  <RouterProvider router={router} /> 
  </React.StrictMode>,
)
