import React from "react";
import { Button } from "react-bootstrap";

export const ButtonOficial = (props) => {
    return(
        <Button className="botaoPadrao" 
        style={{ border: 'none', backgroundColor: '#c92071' }}>{props.nome}
        </Button>
    )
}