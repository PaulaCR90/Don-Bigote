import "./Razon.css";
import { razon } from "../../utils/utils";
import React from "react";

const Razon = () => {
  return (
    <article className="razon-article">
      <h1 className="razon-title">Nuestra razón de ser</h1>
      <section className="razon">
        {razon.map((item, index) => (
          <div key={index}>
            <img className="gatos" src={item.image} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Razon;
