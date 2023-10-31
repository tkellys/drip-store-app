import React from "react";
import { ColecoesDestaque } from "../colecoesDestaque/ColecoesDestaque";
import { Categorias } from "../categorias/Categorias";
import { ProdutosEmAlta } from "../produtosEmAlta/ProdutosEmAlta";
import { OfertaEspecial } from "../oferta/OfertaEspecial";


export const Conteudo = () => {
    return(
        <>
        <ColecoesDestaque />
        <Categorias />
        <ProdutosEmAlta/>
        <OfertaEspecial/>
        </>

);
};