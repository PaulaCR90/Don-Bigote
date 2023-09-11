import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <header>
        <img className="logo" src="./public/logo-sinletras.png" alt="logo" />
        <div className="logo-container">
          <h3>Don Bigote</h3>
          <h5>HIGUERUELA</h5>
        </div>

        <NavBar />
        {/* {tabletOrLess ? <BurgerMenu/> : <NavBar />} */}
      </header>
    </>
  );
};

export default Header;
