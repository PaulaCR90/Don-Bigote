import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ tabletOrLess }) => {
  
  return (
    <>
      <header>
        <img className="logo" src="./assets/Logo_Don_Bigote_horizontal-removebg-preview.png" alt="logo" />
        {tabletOrLess ? <BurgerMenu /> : <NavBar />}
      </header>
    </>
  );
};

export default Header;
