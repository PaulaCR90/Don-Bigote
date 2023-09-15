import React from "react";
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto">
      <h1>CONTACTO</h1>
      <img src="./assets/Contacta.png"/>
      <p>
        Puedes contactar con nosotras a través del correo electrónico o nuestras
        redes sociales.
      </p>
      <a href="mailto:asociaciondonbigote@gmail.com">asociaciondonbigote@gmail.com</a>
    </section>
  );
};

export default Contacto;
