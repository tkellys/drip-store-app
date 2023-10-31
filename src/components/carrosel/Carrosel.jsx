import React from "react";
import { Carousel, Col, Container, Image, Row, Stack } from "react-bootstrap";
import './Carrosel.css'
import { ButtonOficial } from "../botao/Botao";
import tenis from '../../assets/categorias/carrosel/tenis.png'
import tenis2 from '../../assets/categorias/carrosel/tenis_colecao.png'
import circuloLaranja from '../../assets/detalhesCirculos/Ornament 11.png'





export const Carrosel = ()=> {
    return(
      <div style={{ backgroundColor: '#F5F5F5' }}>
      <Carousel >
          <Carousel.Item interval={1000} > 
              <Container>
                  <Row>
                      <Col xs={4} md={4}>
                          <div style={{ paddingTop: '3rem', paddingBottom:'5rem' }}>
                              <Stack gap={3} className='mt-5 mb-5'>
                                  <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                  <div>
                                      <h1 className='queima'>Queima de estoque Nike 🔥</h1>
                                  </div>
                                  <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                              </Stack>
                              <ButtonOficial className='mb-8' nome={'Ver Ofertas'} />
                          </div>
                      </Col>
                      <Col xs={6} md={6}>
                          <Image src={tenis}  fluid />
                      </Col>
                      <Col xs={2} md={2}>
                        <Image src={circuloLaranja} className="ornamento" fluid />
                      </Col>
                  </Row>
              </Container>
          </Carousel.Item>
          <Carousel.Item interval={500000}>
              <Container>
                  <Row>
                      <Col xs={4} md={4}>
                          <div style={{ paddingTop: '3rem', paddingBottom:'5rem'}}>
                              <Stack gap={3} className='mt-5 mb-3'>
                                  <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                  <div>
                                      <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                  </div>
                                  <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                              </Stack>
                              <ButtonOficial className='mb-8' nome={'Ver Ofertas'} />
                          </div>
                      </Col>
                      <Col xs={6} md={6}>                        
                          <Image src={tenis2} width={'80%'} fluid />
                      </Col>
                      <Col xs={2} md={2}>
                        <Image src={circuloLaranja} className="ornamento" fluid />
                      </Col>
                  </Row>
              </Container>
            
          </Carousel.Item>
          <Carousel.Item interval={1000}>
              <Container>
                  <Row>
                      <Col xs={4} md={4}>
                          <div style={{ paddingTop: '3rem' }}>
                              <Stack gap={3} className='mt-5 mb-3'>
                                  <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                  <div>
                                      <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                  </div>
                                  <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                              </Stack>
                           <ButtonOficial nome={'Ver Ofertas'} />
                          </div>
                      </Col>
                      <Col xs={6} md={6}>
                          <Image src={tenis} fluid />
                      </Col>
                      <Col xs={2} md={2}>
                        <Image src={circuloLaranja} className="ornamento"  fluid />
                      </Col>
                  </Row>
              </Container>
            
          </Carousel.Item>
      </Carousel>
  </div>
)
}
