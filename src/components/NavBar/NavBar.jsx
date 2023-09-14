import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({ column, isOpen, setIsOpen}) => {
  return (
    <nav>
      <ul id="nav-list" style={{flexDirection: column ? "column" : "row"}}>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/Asociacion">LA ASOCIACIÓN</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/Colabora">COLABORA</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/Contacto">CONTACTO</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/Donar">DONAR</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;