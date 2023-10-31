import React from 'react'
import { Footer } from '../../components/footer/Footer';
import { Conteudo } from '../../components/conteudo/Conteudo';
import { Carrosel } from '../../components/carrosel/Carrosel';



export const Home = () => {
  return (
    <>
        <Carrosel/>
        <Conteudo />
        <Footer />
    </>
  );
};
