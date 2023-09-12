import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <header>
        <img className="logo" src="./assets/Logo_Don_Bigote_horizontal-removebg-preview.png" alt="logo" />
        <NavBar />
        {/* {tabletOrLess ? <BurgerMenu/> : <NavBar />} */}
      </header>
    </>
  );
};

export default Header;
