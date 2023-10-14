import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './ProdutosEmAlta.css'
import { ButtonOficial } from "../botao/Botao";

export const ProdutosEmAlta = () => {
    return(
        <div>
        <Container xs={12}>
             <h3>Produtos em alta</h3>
             <Row >
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             </Row>

             {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
             <Row >
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             <Col xs={3} md={3}>
                <div>
                <img src="src\assets\categorias\carrosel\tenis_colecao.png" alt="" sizes="50px" srcset="" 
                 />
                 <ButtonOficial nome='30% OFF'/>
                </div>
                <span>Categoria:Tenis</span>
                <p>K-Swiss V8 - Masculino</p>
                <p>Preço sem desconto $200 e com desconto $100</p>
             </Col>
             </Row>
             </Container>
        </div>
    )
}