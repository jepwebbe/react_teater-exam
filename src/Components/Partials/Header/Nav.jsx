import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavStyled } from "./Nav.Styled";

export const Nav = () => {
  // Set the burgermenu to true, if window width is larger than 768
  const burgerWidth = "768"
  const [burgermenu, setBurgermenu] = useState(window.innerWidth >= burgerWidth);
  // Change the value of the burgermenu state to the opposite, if window width..
  const showBurgermenu = () => {
    if (window.innerWidth <= burgerWidth) { 
    setBurgermenu(!burgermenu)};
  };
  return (
    <NavStyled>
      <button onClick={showBurgermenu}>
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <ul style={{ display: burgermenu ? "flex" : "none" }}>
        <li>
          <NavLink to="/" onClick={showBurgermenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={showBurgermenu}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={showBurgermenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={showBurgermenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};
