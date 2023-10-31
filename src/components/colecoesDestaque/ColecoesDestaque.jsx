import React from "react";
import camisa from '../../assets/destaques/camisa-star-wars.png'
import tenis from '../../assets/destaques/tenis.png'
import headphone from '../../assets/destaques/headphone.png'

import { ButtonOficial } from "../botao/Botao";
import './ColecoesDestaque.css'


export const ColecoesDestaque = () => {
    const colecoes = [{
        titulo: 'Novo drop Supreme',
        desconto: '30',
        image: camisa
    },{
        titulo: 'Coleção Adidas',
        desconto: '30',
        image: tenis
    },{
        titulo: 'Novo Beats Bass',
        desconto: '30',
        image: headphone
    }]
    
    return (
        <div>
            <div className='mb-4' style={{ backgroundColor: '#f9f8fe' }}>

                <div className="container pt-4">
                    <h3>Coleções em destaque</h3>
                </div>

                    <div className="container text-center">
                    <div className='row' style={{ gap: '12px' }}>
                        {colecoes.map((c, index) => {
                        return (
                         <div key={index} className={`card col ${c.class ? c.class : ''} `} style={{ backgroundImage: `url(${c.image})`, border: 'none' }}>
                          <div className="off">{`${c.desconto}% OFF`}</div>
                         <h3 className="titulo-card">{c.titulo}</h3>
                            <ButtonOficial id="comprar" nome='Comprar' />
                         </div>
                        )
                        })}
                    </div>
                    </div>
            </div>
        </div>

    );

};
