import React from 'react'
import { MenuBar } from '../../components/header/MenuBar';
import { Footer } from '../../components/footer/Footer';
import { Conteudo } from '../../components/conteudo/Conteudo';
import { Carrosel } from '../../components/carrosel/Carrosel';


export const Home = () => {
  return (
    <>
        <MenuBar />
        <Carrosel/>
        <Conteudo />
        <Footer />
    </>
  );
};
