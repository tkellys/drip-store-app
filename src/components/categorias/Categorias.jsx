import React from "react";
import camisa from '../../assets/categorias/camiseta.png'
import calca from '../../assets/categorias/calca.png'
import bone from '../../assets/categorias/bones.png'
import headphone from '../../assets/categorias/headset.png'
import tenis from '../../assets/categorias/tenis.png'
import './Categorias.css';


export const Categorias = () => {
   const categorias =[{
    titulo: 'Camisetas',
    image: camisa
   }, {
    titulo: 'Calças',
    image: calca
   },{
    titulo:'Bonés',
    image: bone
   },{
    titulo:'Headphones',
    image: headphone
    }, {
    titulo: 'Tênis',
    image: tenis
    }]
   
    return (

    <div>
        <div >
            <h3 className="colecoes-destaque text-center">Categorias em destaque</h3>
                <div className="container text-center">
                    <div className="row justify-content-md-center" style={{ marginBottom: '123px' }}>
                        {categorias.map((c, index) => {
                            return (
                                <div key={index} className="col-sm-2">
                                <div className="circle">
                                <img src={c.image} alt="" />
                                    <p className='mt-4'>{c.titulo}</p>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
     
    )
}
