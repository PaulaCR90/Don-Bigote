import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({ column, isOpen, setIsOpen}) => {
  return (
    <nav>
      <ul id="nav-list" style={{flexDirection: column ? "column" : "row"}}>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/">LA ASOCIACIÓN</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/">COLABORA</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/">CONTACTO</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/">DONAR</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;