import React from "react";
import { BsSearch } from "react-icons/bs";


export const InputPesquisa = ()=>{
    return(
        <div>
            <input className="barra-de-pesquisa" type="text" placeholder="Pesquise o produto..."/>
            <BsSearch/>
        </div>
    )
}