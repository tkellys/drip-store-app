import React from "react";
import { ButtonOficial } from "../botao/Botao";
import TenisOferta from "../../assets/Laye 1.png"
import { Col, Row } from "react-bootstrap";

export const OfertaEspecial = () =>{
return(
    <>
        
        <Row style={{backgroundColor: '#FFFFFF', paddingTop: '80px'}}>
            <Col xs={8} md={8} style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{background: 'linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%)', borderRadius: '60% 60% 10% 10%'}}>
                    <img src={TenisOferta} alt="" />
                </div>
            </Col>
            <Col xs={4} md={4}>
                <p>Oferta especial</p>
                <h3>Air Jordan edição de Colecionador</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum laudantium, adipisci dolorum consequatur, labore beatae atque non, quos praesentium veniam provident facilis aut aliquam rerum consequuntur eligendi nesciunt omnis.</p>
                <ButtonOficial nome="Ver Oferta"/>            
            </Col>
        </Row>
    
    </>

)  
}