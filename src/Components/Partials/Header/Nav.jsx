import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavStyled } from "./Nav.Styled";
import Search from "./Search/Search";
import Login from "./Login/Login";

export const Nav = () => {
  // Set the burgermenu to true, if window width is larger than 768
  const burgerWidth = "768"
  const [burgermenu, setBurgermenu] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);
  console.log(loginMenu)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= burgerWidth) {
        setBurgermenu(true);
      } else {
        setBurgermenu(false);
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Change the value of the burgermenu state to the opposite, if window width..
  const showBurgermenu = () => {
    if (window.innerWidth <= burgerWidth) { 
    setBurgermenu(!burgermenu)};
  };
  const showLogin = () => {
    setLoginMenu(!loginMenu)
  }
  return (
    <NavStyled>
      <button className="burger" onClick={showBurgermenu}>
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <Search style={{ display: burgermenu ? "grid" : "none" }}/>
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
            <p onClick={showLogin}>LOGIN</p>
            <div style={{ display: loginMenu ? "block" : "none" }}>
              <Login />
            </div>
        </li>
      </ul>
    </NavStyled>
  );
};
