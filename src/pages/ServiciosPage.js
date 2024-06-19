
import React from 'react';
import '../Styles/ServiciosPage.css'; // Asegúrate de que la ruta sea correcta

const ServiciosPage = () => {
  return (
    <main className="holder">
      <h2>Servicios</h2>
      <div className="servicio">
        <img src={`${process.env.PUBLIC_URL}/Imagenes/servicios/ferroviario.jpg`} alt="Tren" />
        <div className="info">
          <h4>Transporte Ferroviario</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem unde sed, obcaecati nemo tempore fugiat, quisquam perferendis veritatis cupiditate voluptatum quia aliquid suscipit inventore!</p>
        </div>
      </div>
      <div className="servicio">
        <img src={`${process.env.PUBLIC_URL}/Imagenes/servicios/terrestre.jpg`} alt="Autobús" />
        <div className="info">
          <h4>Transporte por Autobús</h4>
          <p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
        </div>
      </div>
      <div className="servicio">
        <img src={`${process.env.PUBLIC_URL}/Imagenes/servicios/aereo.jpg`} alt="Avión" />
        <div className="info">
          <h4>Transporte Aéreo</h4>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Cursus commodo tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
      </div>
      <div className="servicio">
        <img src={`${process.env.PUBLIC_URL}/Imagenes/servicios/maritimo.jpg`} alt="Barco" />
        <div className="info">
          <h4>Transporte Marítimo</h4>
          <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Porta ac consectetur ac, vestibulum at eros.</p>
        </div>
      </div>
    </main>
  );
}

export default ServiciosPage;
