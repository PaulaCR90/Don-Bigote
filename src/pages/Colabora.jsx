import React from "react";
import "./Colabora.css";

const Colabora = () => {
  return (
    <article className="colabora-article">
      <h1>COLABORA</h1>
      <h3>Antes de todo… ¡Gracias por querer colaborar!</h3>
      <p>
        ¿Cómo puedes hacerlo? Hay muchas formas de colaborar con nuestra
        asociación. Elige la que mejor se adapte a ti.
      </p>
      <section className="colabora-section">
        <div className="socio">
          <h3>Socio/a</h3>
          <img src="./assets/socio.png" alt="" />
          <p>
            Puedes formar parte de la asociación siendo socio/a y formando parte
            de ella.
            <br />
            ¿Qué significa ser socio/a? Por menos de 2€ al mes (20€ al año)
            puedes formar parte de la asociación, acudir a las reuniones y
            decidir sobre los asuntos importantes.
            <br />
            Las personas que quieran hacerse cargo de una colonia deberán ser
            socias activas, recibiendo un carnet de alimentadoras.
            <br />
            Además, con tu cuota recibirás un regalo exclusivo de Don Bigote.
            <br />
            Si no tienes tiempo y no puedes acudir pero aun así quieres formar
            parte, no te preocupes, no es obligatoria la asistencia. Nos
            encantará tenerte en la asociación igualmente.
          </p>
        </div>
        <div className="voluntario">
          <h3>Voluntario/a</h3>
          <img src="./assets/voluntario.png" alt="" />
          <p>
            Un voluntario es aquella persona que no puede aportar económicamente
            pero quiere ayudarnos de manera puntual en la organización de
            alimento, mercadillos, ventas, etc.
            <br />
            ¡Cualquier persona es bien recibida!
          </p>
        </div>
        <div className="puntualmente">
          <h3>Puntualmente</h3>
          <img src="./assets/Puntuales.png" alt="" />
          <p>
            A lo largo del año realizaremos numerosos eventos en los que podrás
            colaborar directamente con nosotras:
          </p>
          <ul>
            <li>Mercadillos</li>
            <li>Lotería</li>
            <li>Sorteos en redes sociales</li>
            <li>Huchas en comercios locales</li>
            <li>Recogida de alimentos en tiendas de animales</li>
          </ul>
          <p>¡Seguidnos en redes para estar al tanto!</p>
        </div>
        </section>
    </article>
  );
};

export default Colabora;
