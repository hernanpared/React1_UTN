import React from 'react';
import '../Styles/NovedadesPage.css'; // Asegúrate de crear y actualizar este archivo CSS

const NovedadesPage = (props) => {
  return (
    <main className="holder">
    
      <section className="holder">
        <h2>Novedades</h2>
        <div className="novedades">
          <h3>Titulo</h3>
          <h4>Subtitulo</h4>
          <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipiscing elit. Necessitatibus nostrum aliquam consequuntur, alias, perspiciatis eos.</p>
          <hr />
        </div>
        <div className="novedades">
          <h3>Titulo</h3>
          <h4>Subtitulo</h4>
          <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipiscing elit. Necessitatibus nostrum aliquam consequuntur, alias, perspiciatis eos.</p>
          <hr />
        </div>
        <div className="novedades">
          <h3>Titulo</h3>
          <h4>Subtitulo</h4>
          <p>Descripcion - Lorem ipsum dolor sit amet consectetur adipiscing elit. Necessitatibus nostrum aliquam consequuntur, alias, perspiciatis eos.</p>
          <hr />
        </div>
      </section>
      <footer>
        <p>Diseñado por Ruben Hernan Pared - &copy;2024</p>
      </footer>
    </main>
  );
}

export default NovedadesPage;
