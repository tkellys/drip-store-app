import React from "react";
import { Col, Container, Row, } from "react-bootstrap";
import { ButtonOficial } from "../botao/Botao";
import './ColecoesDestaque.css'


export const ColecoesDestaque = () => {
    return (
        <div>
            <Container xs={12}>
            <h3 className="TituloDestaque">Coleções em destaque</h3>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col">
                    <div class="card mb-3 rounded-3 shadow-sm">
                        <div class="card-body">
                            <Row>
                                <Col xs={6} md={6} className="destaque">
                                <small class="text-body-secondary fw-light">30% off "criar componente"</small>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li><h2>Novo drop Supreme</h2></li>
                                </ul>
                                <ButtonOficial nome="Comprar" />
                                </Col>
                                <Col xs={6} md={6}>
                                <img class="d-block w-100" alt="" src="src\assets\destaques\camisa-star-wars.png"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 rounded-3 shadow-sm">
                        <div class="card-body">
                        <Row>
                                <Col xs={6} md={6} className="destaque">
                                <small class="text-body-secondary fw-light">30% off "criar componente"</small>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li><h2>Coleção Adidas</h2></li>
                                </ul>
                                <ButtonOficial nome="Comprar" />
                                </Col>
                                <Col xs={6} md={6}>
                                <img class="d-block w-100" alt="" src="src\assets\destaques\tenis.png"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 rounded-3 shadow-sm">
                        <div class="card-body">
                        <Row>
                                <Col xs={6} md={6} className="destaque">
                                <small class="text-body-secondary fw-light">30% off "criar componente"</small>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li><h2>Novo Beats Bass</h2></li>
                                </ul>
                                <ButtonOficial nome="Comprar" />
                                </Col>
                                <Col xs={6} md={6}>
                                <img class="d-block w-100" alt="" src="src\assets\destaques\headphone.png"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );

};
