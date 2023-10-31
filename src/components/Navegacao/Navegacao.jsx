import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Navegacao.css";


export default function Menu() {
    
    return (
      <>
        <AppBar position="static" color="inherit" className="app-bar">
          <Toolbar disableGutters={true}>
              <Typography variant="h6"
                noWrap
                component="a"
                href="/"
                className={localStorage.getItem("menuSelecionado") === "Home" ? "item-menu-selecionado" : "item-menu"} 
                sx={{mr: 2}}
                onClick={() => localStorage.setItem("menuSelecionado", "Home")}>
                Home
              </Typography>

              <Typography variant="h6"
                noWrap
                component="a"
                href="/produtos"
                className={localStorage.getItem("menuSelecionado") === "Produtos" ? "item-menu-selecionado" : "item-menu"} 
                sx={{mr: 2}}
                onClick={() => localStorage.setItem("menuSelecionado", "Produtos")}>
                Produtos
              </Typography>

              <Typography variant="h6"
                noWrap
                component="a"
                href="/categorias"
                className={localStorage.getItem("menuSelecionado") === "Categorias" ? "item-menu-selecionado" : "item-menu"} 
                sx={{mr: 2}}
                onClick={() => localStorage.setItem("menuSelecionado", "Categorias")}>
                Categorias
              </Typography>

              <Typography variant="h6"
                noWrap
                component="a"
                href="/pedidos"                
                className={localStorage.getItem("menuSelecionado") === "Meus Pedidos" ? "item-menu-selecionado" : "item-menu"} 
                sx={{mr: 2}}
                onClick={() => localStorage.setItem("menuSelecionado", "Meus Pedidos")}>
                Meus Pedidos
              </Typography>

          </Toolbar>
       </AppBar>    
       </>        
    )
  }
  
  