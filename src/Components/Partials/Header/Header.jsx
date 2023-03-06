import React from "react";
import { HeaderStyled } from "./Header.Styled";
import { Nav } from "./Nav";
import logo from "../../../assets/images/logo.svg"

export const Header = () => {

  return (
    <HeaderStyled>
      <a href="/"><img src={logo} alt="Det Utrolige Teaters logo med en teatersmiley" /></a>
      <Nav />
    </HeaderStyled>
  );
};
