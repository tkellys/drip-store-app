import React, {useState, useEffect} from "react";
import imgProdutoEmAlta from '../../assets/colecoes/tenis_colecao.png';
import "./ProdutosEmAlta.css";
import {buscarProdutosEmAlta} from "../../services/ApiProdutos";

import { Col, Row } from "react-bootstrap";

export const ProdutosEmAlta = () => {

   const [produtos, setProdutos] = useState([]);

   useEffect(() => {
      async function listar(){
         const listaProdutos = await buscarProdutosEmAlta();
         setProdutos(listaProdutos);
      }
      listar();      
   }, []);
  
 
         return (
            <div className="container">
               <Row >
                <Col xs={12} md={12} style={{display: 'flex'}}>
                     <Col xs={6} md={6} style={{textAlign: 'left', fontWeight: 'bold'}}>
                        Produtos em Alta
                     </Col>
                     <Col xs={6} md={6} style={{textAlign: 'right'}}>
                        <a href="/produtos" style={{color: '#C92071'}}>Ver todos -&gt;</a>
                     </Col>
                  </Col>
               </Row>
            
               <Row > 
                     {produtos.map((prod, index) => {
                        return(
                        <Col key={index} xs={3} md={3}>
                              <Col style={{ backgroundColor: '#FFFFFF'}}> 
                                 {prod.desconto ? <div className="off"> {`${prod.desconto}% OFF`}</div> : <></>}
                                 <img src={imgProdutoEmAlta} alt="" />                                                                                           
                              </Col>
                              <div className="text-start">
                                 <div className="categoria">{prod.tipo}</div>
                                 <div className="produto">{`${prod.nome} - ${prod.genero.nome}`}</div>
                                 <div>
                                    <span className="preco-antes">{`R$ ${prod.preco}`}</span>
                                    <span className= 'preco-depois'>{`R$ ${prod.precoComDesconto}`}</span>
                                 </div>
                              </div>
                           </Col>
                        )
                     })}
                  </Row>
            </div>
);
};
