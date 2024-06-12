import React from 'react';
import '../Styles/NosotrosPage.css'; 

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora
          dolores culpa libero a natus fugit ea ratione reprehenderit,
          consequuntur, debitis corrupti asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          blanditiis eveniet minima repudiandae. Natus commodi consequuntur eius
          repellat ducimus, omnis, delectus sapiente saepe quam necessitatibus
          exercitationem molestias ipsum voluptates iusto.
        </p>
      </div>

      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="/Imagenes/nosotros/nosotros1.jpg" alt="Juan Gomez" />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati aspernatur deleniti, perferendis mollitia voluptas est
              accusantium veritatis quidem, autem architecto commodi cumque,
              suscipit nobis molestias! Voluptatibus esse quibusdam sunt
              architecto.
            </p>
          </div>
          <div className="persona">
            <img src="/Imagenes/nosotros/nosotros2.jpg" alt="Ana Rivera" />
            <h5>Ana Rivera</h5>
            <h6>Directora de Marketing</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              consequatur dolores. Autem necessitatibus eius, officiis vel
              facere non vitae deserunt magnam, ipsum quo odit id consequatur
              expedita? Dolor, cumque natus.
            </p>
          </div>
          <div className="persona">
            <img src="/Imagenes/nosotros/nosotros3.jpg" alt="Luis Martínez" />
            <h5>Luis Martínez</h5>
            <h6>Jefe de Ventas</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              tempore minima molestiae deserunt est odit doloribus non
              perspiciatis, autem, rerum, assumenda nemo sint accusantium
              doloremque veniam? Ipsa nihil quam velit.
            </p>
          </div>
          <div className="persona">
            <img src="/Imagenes/nosotros/nosotros4.jpg" alt="Sofía Castro" />
            <h5>Sofía Castro</h5>
            <h6>Gerente de Operaciones</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              asperiores possimus, non voluptatibus odit. Esse error, voluptates
              deleniti eius commodi corrupti quisquam voluptatum quae. Harum
              aperiam sapiente fugiat cum atque.
            </p>
          </div>
          <div className="persona">
            <img src="/Imagenes/nosotros/nosotros5.jpg" alt="Carlos López" />
            <h5>Carlos López</h5>
            <h6>Director Financiero</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              quod laborum voluptate quam, repudiandae esse accusamus magni,
              fugit quasi, sint eum natus harum temporibus! Maxime obcaecati
              quaerat nostrum, fuga praesentium.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NosotrosPage;
