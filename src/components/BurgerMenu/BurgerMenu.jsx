import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="toggle"
        src="./assets/zarpa.png"
        onClick={() => setIsOpen(isOpen == true ? false : true)}
      />
      <div id="hamburguesa" className={isOpen ? "isOpen" : "isClosed"}>
        <NavBar column isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default BurgerMenu;
