import React from "react"
import './MenuBar.css'
import logo from '../../assets/logo/logo.svg'
import carrinho from '../../assets/iconesBrands/carrinho.svg'
import {Col, Container, Navbar, Row} from "react-bootstrap"
import { Navegacao } from "../Navegacao/Navegacao";
import { InputPesquisa } from "../barraDePesquisa/InputPesquisa";
import { ButtonOficial } from "../botao/Botao"

export const MenuBar = () => {
    return( 
<div>
<Container className="topoPagina">

  <Navbar style={{paddingTop: '2em', paddingBottom: '2em'}}>
    <Col md={12}>
      <Row>
      <div class="hstack gap-3">
        <Col md={2} class="ms-auto"> 
        <a className="logo text-decoration-none d-flex ms-auto" href="/">
          <img src={logo}/>
          <div className="titulo ms-auto">Digital Store</div>
        </a>
        </Col>
        <Col md={4} className="ms-auto"> 
          <InputPesquisa/>
        </Col>
        <Col md={1} className="ms-auto"> 
        <a href="/cadastro" className="cadastrese"> Cadastre-se</a>
        </Col>
        <Col md={2}>
        <ButtonOficial nome='Entrar' className="ms-auto"/>
        </Col>
        <Col md={2} class="ms-auto">
        <img src={carrinho} alt="logoCarrinho"/>
        </Col>
        </div>
      </Row>
    </Col>
  </Navbar>

  <Col md={12} style={{}}>
    <Row>
   <Navegacao/>
   </Row>
  </Col>
</Container>
</div>
  );
  };

