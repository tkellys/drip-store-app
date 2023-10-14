import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import './Categorias.css';


export const Categorias = () => {
    return (

    <div>
        <Container xs={12} md={12}>

            <h3 class="text-center">Categorias em destaque</h3>
        <Row>
            <Col class="row justify-content-md-center"xs={2} md={2}>
            <div class="avatar avatar-xl rounded-circle">
            <span class="avatar avatar-md " style={{backgroundImage:`url("src/assets/categorias/camiseta.png")` }}>
            </span>
            </div>
            </Col>
            <Row>
            <span class="mt-2">Camisetas</span>
            </Row>
           
            <Col class="row justify-content-md-center"xs={2} md={2}>
            <div class="avatar avatar-xl rounded-circle">
            <span class="avatar avatar-md " style={{backgroundImage:`url("src/assets/categorias/calca.png")` }}>
            </span>
            </div>
            </Col>
            <Row>
            <span class="mt-2">Calças</span>
            </Row>

            <Col xs={2} md={2}>
            <div class="avatar avatar-xl rounded-circle">
            <span class="avatar avatar-md " style={{backgroundImage:`url("src/assets/categorias/bones.png")` }}>
            </span>
            </div>
            </Col>
            <Row>
            <p class="mt-2">Bonés</p>
            </Row>

            <Col xs={2} md={2}>
            <div class="avatar avatar-xl rounded-circle">
            <span class="avatar avatar-md " style={{backgroundImage:`url("src/assets/categorias/headset.png")` }}>
            </span>
            </div>
            </Col>
            <Row>
            <p class="mt-2">Headphones</p>
            </Row>
         
            <Col xs={2} md={2}>
            <div class="avatar avatar-xl rounded-circle">
            <span class="avatar avatar-md " style={{backgroundImage:`url("src/assets/categorias/tenis.png")` }}>
            </span>
            </div>
            </Col>
            <Row>
            <p class="mt-2">Tenis</p>
            </Row>

        </Row>
        </Container>
    </div>
          
           
    );

};
