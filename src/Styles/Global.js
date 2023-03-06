import { createGlobalStyle } from "styled-components";
// GlobalStyles for the styled-components that add the standard values site-wide
export const GlobalStyles = createGlobalStyle`
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
}
#root {
    height: 100%;
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
@media (max-width: ${(props) => props.theme.breakpoints.m}) {
    html {
        font-size: 12px;
    }
}
`