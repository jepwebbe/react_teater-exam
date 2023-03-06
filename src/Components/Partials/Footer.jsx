import React from "react";
import { FooterStyled } from "./Footer.Styled";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <h3>ADRESSE</h3>
        <ul>
          <li>Det utrolige teater</li> <li>Havnegade 901</li>{" "}
          <li>9000 Aalborg</li> <li>EAN 5798003279845</li>{" "}
          <li>CVR 1001 0012</li>
          <br />
          <li>
            <a href="https://www.google.dk/maps/search/havnegade+901/">
              Find vej på kort
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>BILLETSERVICE</h3>
        <ul>
          <li>Se åbningstider</li>
          <li>Billettelefon: +45 96 31 80 80</li>{" "}
          <li>
            <a target="_blank" rel="noreferrer" href="mailto:billet@dut.dk">
              billet@dut.dk
            </a>
          </li>
        </ul>
        <h3>ADMINISTRATION</h3>
        <ul>
          <li>Telefon: +45 96 31 80 90</li>{" "}
          <li>
            <a target="_blank" rel="noreferrer" href="mailto:adm@dut.dk">
              adm@dut.dk
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>PRAKTISKINFO</h3>
        <ul>
          <li>Kontakt</li> <li>Kom trygt i teatret</li> <li>Presseside</li>
          <li>Skoleforestillinger</li>
          <li>Teatercaféen</li> <li>Handelsbetingelser</li>
        </ul>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="http://www.facebook.com">
          <FaFacebookSquare />
        </a>
        <a target="_blank" rel="noreferrer" href="http://instagram.com">
          <FaInstagramSquare />
        </a>
        <a target="_blank" rel="noreferrer" href="http://linkedin.com">
          <FaLinkedin />
        </a>
      </div>
    </FooterStyled>
  );
};
