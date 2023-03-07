import { createGlobalStyle } from "styled-components";
import Titilium from "../assets/fonts/TitilliumWebRegular.ttf"
import Playfair from "../assets/fonts/PlayfairDisplayVariableFont.ttf"
// GlobalStyles for the styled-components that add the standard values site-wide
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Titilium";
    src: local("Titilium"),
    url(${Titilium}) format('truetype');
}
@font-face {
    font-family: "Playfair";
    src: local("Playfair"),
    url(${Playfair}) format('truetype');
}
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: "Titilium";
}
#root {
    height: 100%;
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "header header" "main main" "footer footer";
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
li {
    list-style-type: none;
}
a {
    text-decoration: none;
}
button {
    font-family: "Titilium";
}
h1, h2, h3 {
    font-family: "Playfair";
    font-weight: 100;
}
h1 {
    margin: 0;
}
@media (max-width: ${(props) => props.theme.breakpoints.l}) {
    html {
        font-size: 12px;
    }
}
`