import "./Ser.css";
import React from "react";

const Ser = () => {
  return (
    <section className="ser">
      <div className="div-ser">
        <img src="../../../public/assets/socio.png" />
        <h3>Quiero ser socio/a</h3>
        <p>
          Únete a Don Bigote Higueruela. Colabora con nosotras y conoce de
          primera mano todas las acciones que desarrollamos a lo largo del año
          en defensa de la comunidad felina.
        </p>
      </div>
      <div className="div-ser">
        <img src="../../../public/assets/voluntario.png" />
        <h3>Quiero ser voluntario/a</h3>
        <p>
          Si quieres colaborar donando tu tiempo de forma puntual o permanente
          ¡eres bienvenid@! Contáctanos y descubre las acciones que tenemos en
          marcha en las que puedes participar.
        </p>
      </div>
    </section>
  );
};

export default Ser;
