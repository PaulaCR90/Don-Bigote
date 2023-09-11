import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="donde-estamos">
        <h3>Dónde estamos</h3>
        <p>Calle Juan Carlos I, número 1<br/>02694 Higueruela (AB)</p>
      </div>
      <div className="rrss-container">
        <a href="https://www.facebook.com/profile.php?id=61550659575214&locale=es_ES">
          <img
            className="rrss"
            src="./public/assets/logotipo-circular-de-facebook.png"
            alt="facebook"
          />
          <p>Asociación Don Bigote</p>
        </a>

        <a href="https://www.instagram.com/donbigoteasoc/">
          <img
            className="rrss"
            src="./public/assets/instagram.png"
            alt="instagram"
          />
          <p>@donbigoteasoc</p>
        </a>
        <a href="mailto: asociaciondonbigote@gmail.com">
          <img
            className="rrss"
            src="./public/assets/email.png"
            alt="correo"
          />
          <p>asociaciondonbigote@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
