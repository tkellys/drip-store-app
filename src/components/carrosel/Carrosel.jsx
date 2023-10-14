import React from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import './Carrosel.css'
import { ButtonOficial } from "../botao/Botao";



export const Carrosel = ()=> {
    return(
    <Container className="carrosel">
      <Row>
       <Col xs={6} md={6}>
       <div style={{ paddingTop: '3rem' }}>
       <Stack gap={3} className='mt-5 mb-3'>
        <div className="texto1">Melhores ofertas personalizadas</div>
        <div className="textoDestaque">
          <h1>Queima de stoque Nike 🔥</h1>
          </div>
        <div className="textoDescritivo">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur. </div>
        </Stack>
        <ButtonOficial nome='Ver ofertas'/>
        </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="circulo"></div>
        <div id="carousel-indicators-dot" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" alt="" src="src\assets\carrosel\tenis.png" />
          </div>
          <div class="carousel-item">
          <img class="d-block w-100" alt="" src="src\assets\carrosel\tenis_colecao.png" />
          </div>
        </div>
        </div>
        </Col>
        
        <div id="carousel-indicators-dot" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ paddingBotton: '50px'}}>
          <div class="carousel-indicators carousel-indicators-dot">
          <button type="button" data-bs-target="#carousel-indicators-dot" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#carousel-indicators-dot" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carousel-indicators-dot" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carousel-indicators-dot" data-bs-slide-to="3"></button>
        </div>
         </div>
      
      </Row>
    </Container>
)
}