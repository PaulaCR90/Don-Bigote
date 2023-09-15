import React from "react";
import "./Donar.css";

const Donar = () => {
  return (
    <section className="donar-section">
      <div className="teaming">
        <img src="./assets/logo_teaming_vertical.png" alt="logo Teaming" />
        <h3>Teaming</h3>
        <p>
          Teaming es una herramienta para gestionar recaudaciones para causas
          sociales. Se puede donar sólo 1€/mes, es 100% sin comisiones y puedes
          darte de baja cuando quieras. Gracias al certificado de donaciones,
          Hacienda te desgrava hasta un 75% de lo que dones directamente en tu
          declaración de la renta, dependiendo de cuanto hayas donado.
        </p>
        <p>
          Aporta tu granito{" "}
          <a href="https://www.teaming.net/donbigote">AQUÍ!</a>
        </p>
      </div>

      <div className="donaciones">
        <img src="./assets/Donaciones.png" />
        <h3>Donaciones</h3>
        <p>
          Si quieres donarnos cualquier otra cantidad puedes hacerlo por
          transferencia a nuestra cuenta bancaria:
          <br />
          XXXX-XXXXXXXXX-XXXXXXXX-XXXXXXXXXXXXXXXX
        </p>
        <p>
          También puedes donarnos pienso para nuestros gatetes, entrando en el
          apartado “contacto”.
        </p>
      </div>
    </section>
  );
};

export default Donar;
