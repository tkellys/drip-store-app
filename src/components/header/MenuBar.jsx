import React from "react"

import { Grid, TextField, Link, Button } from "@mui/material";
import Navegacao from "../Navegacao/Navegacao.jsx";
import logo from "../../assets/logo/logo.svg"
import carrinho from "../../assets/iconesBrands/carrinho.svg"

import "./MenuBar.css";


export default function MenuBar() {
    

    return (
      <>
      <Grid item xs={12} className="menu">
            <Grid className="paper" container spacing={2}>        
                <Grid item xs={12} md={2} display={"flex"} paddingLeft={"100px !important"} >
                    <Grid item xs={12} md={2}>
                        <img className="imagem-logo" src={logo}  /> 
                    </Grid>
                    <Grid item xs={12} md={10}>
                         <h4 className="cabecalho"> Digital Store </h4>
                    </Grid>    
                </Grid>

                <Grid item xs={12} md={8}>
                    <TextField id="pesquisa" label="Pesquisar produto..." variant="outlined" fullWidth margin="dense" size="small"/>          
                </Grid> 

                <Grid item xs={12} md={2} display={"flex"} marginTop={"10px"}>
                    <Grid item xs={12} md={4} marginTop={"5px"}>
                        <Link href="#" color="inherit">{'Cadastre-se'}</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>                  
                        <Button className="botao" variant="contained">Entrar</Button>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <img src={carrinho} /> 
                    </Grid>
                </Grid> 

                <Navegacao />

            </Grid> 
        </Grid>      
      </>
    )
  }
  
  