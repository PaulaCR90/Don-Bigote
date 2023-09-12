import "./Footer.css";
import React from "react";

const Footer = ({ tabletOrLess }) => {
  return (
    <>
      {tabletOrLess ? (
        <footer>
          <div className="rrss-container">
            <a href="https://www.facebook.com/profile.php?id=61550659575214&locale=es_ES">
              <img
                className="rrss"
                src="./assets/logotipo-circular-de-facebook.png"
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com/donbigoteasoc/">
              <img
                className="rrss"
                src="./assets/instagram.png"
                alt="instagram"
              />
            </a>
            <a href="mailto: asociaciondonbigote@gmail.com">
              <img className="rrss" src="./assets/email.png" alt="correo" />
            </a>
          </div>
          <p>
            © Created by{" "}
            <a href="mailto: p.a.castrorodriguez@gmail.com">PaulaCR</a> with
            love for <span>Don Bigote</span>
          </p>
        </footer>
      ) : (
        <footer>
          <div className="footer-container">
            <div className="donde-estamos">
              <h3>Dónde estamos</h3>
              <p>
                Calle Juan Carlos I, número 1<br />
                02694 Higueruela (AB)
              </p>
            </div>
            <div className="rrss-container">
              <a href="https://www.facebook.com/profile.php?id=61550659575214&locale=es_ES">
                <img
                  className="rrss"
                  src="./assets/logotipo-circular-de-facebook.png"
                  alt="facebook"
                />
                <p>Asociación Don Bigote</p>
              </a>
              <a href="https://www.instagram.com/donbigoteasoc/">
                <img
                  className="rrss"
                  src="./assets/instagram.png"
                  alt="instagram"
                />
                <p>@donbigoteasoc</p>
              </a>
              <a href="mailto: asociaciondonbigote@gmail.com">
                <img className="rrss" src="./assets/email.png" alt="correo" />
                <p>asociaciondonbigote@gmail.com</p>
              </a>
            </div>
          </div>
          <p>
            © Created by{" "}
            <a href="mailto: p.a.castrorodriguez@gmail.com">PaulaCR</a> with
            love for <span>Don Bigote</span>
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
