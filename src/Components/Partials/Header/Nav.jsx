import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavStyled } from "./Nav.Styled";
import Search from "./Search/Search";
import Login from "../Login/Login";
import { useLoginStore } from "../Login/useLoginStore";

export const Nav = () => {
  // Set the burgermenu to true, if window width is larger than 768
  const burgerWidth = "768";
  // useState to toggle visibility of burgermenu and loginmenu
  const [burgermenu, setBurgermenu] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);
  // destructuring of login hook
  const { loggedIn } = useLoginStore();
  // adjusts the burgermenu boolean according to window size
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
      setBurgermenu(!burgermenu);
    }
  };
  const showLogin = () => {
    setLoginMenu(!loginMenu);
  };
  useEffect(() => {
    const closeLoginMenu = () => {
      setLoginMenu(false);
    };
    const handleClick = (e) => {
      // Check if the click event was in the login-menu
      if (e.target.closest(".login-menu")) {
        return;
      }

      // If it was not close the menu
      closeLoginMenu();
    };
    document.addEventListener("click", handleClick);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <NavStyled>
      <button className="burger" onClick={showBurgermenu}>
        {!burgermenu ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      <Search style={{ display: burgermenu ? "grid" : "none" }} />
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
        <li className="login-menu">
          {!loggedIn ? (
            <p onClick={showLogin}>LOGIN</p>
          ) : (
            <NavLink to="/minside">MIN SIDE</NavLink>
          )}
          <div id="logMeIn" style={{ display: loginMenu ? "block" : "none" }}>
            <Login forward={true} />
          </div>
        </li>
      </ul>
    </NavStyled>
  );
};
