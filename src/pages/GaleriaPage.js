// src/pages/GaleriaPage.js

import React from 'react';
import '../Styles/GaleriaPage.css'; 

const GaleriaPage = () => {
  return (
    <main className="holder">
      <div className="galeria">
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img01.jpg`} alt="Camion de Combustible" />
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img02.jpg`} alt="Camion de Construccion" />
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img03.jpg`} alt="Barco Pesquero" />
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img04.jpg`} alt="Restaurante del Barco" />
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img05.jpg`} alt="Tren de Montaña" />
        <img src={`${process.env.PUBLIC_URL}/Imagenes/galeria/img07.jpg`} alt="Tren super rapido" />
      </div>
    </main>
  );
}

export default GaleriaPage;
