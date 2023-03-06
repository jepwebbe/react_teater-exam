import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavStyled } from "./Nav.Styled";
import Search from "./Search/Search";

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
      <button className="burger" onClick={showBurgermenu}>
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <Search />
      <ul style={{ display: burgermenu ? "flex" : "none" }}>
        <li>
          <NavLink to="/" onClick={showBurgermenu}>
            FORSIDE
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={showBurgermenu}>
            FORESTILLINGER & EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/skuespillere" onClick={showBurgermenu}>
            SKUESPILLERE
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={showBurgermenu}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  );
};
