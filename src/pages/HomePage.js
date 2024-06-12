import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src={`${process.env.PUBLIC_URL}../../public/Imagenes/home/img01.jpg`} alt="avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quia, reprehenderit? 
            Exercitatione error saepe aliquid odio placeat quis consectetur iusto assumenda tempore, cupiditate iste!. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempora ipsum ipsa, commodi asperiores hic nescient dolores explicabo, pariatur tempore.
          </p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelente</span>
            <span className="autor">Juan Gomez - zapatos.com</span>
          </div>
        </div>
      </div>
      <footer>
        Diseñado por Ruben Hernan Pared - ©2024
      </footer>
    </main>
  );
}

export default HomePage;

