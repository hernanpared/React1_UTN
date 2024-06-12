import React from 'react';
import '../Styles/ContactoPage.css'; // Asegúrate de crear y actualizar este archivo CSS

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" name="telefono" />
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje"></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>También puede contactarse con nosotros usando los siguientes medios:</p>
        <ul>
          <li><i className="fa-solid fa-phone"></i>Teléfono: 43242388</li>
          <li><i className="fa-solid fa-envelope"></i>Email: contacto@transportesx.com.ar</li>
          <li><i className="fa-brands fa-facebook"></i>Facebook:</li>
          <li><i className="fa-brands fa-twitter"></i>Twitter:</li>
          <li><i className="fa-brands fa-skype"></i>Skype:</li>
        </ul>
      </div>
    </main>
  );
}

export default ContactoPage;
