import styled from 'styled-components'

export const FooterStyled = styled.footer`
grid-area: footer;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1.8fr;
background-color: ${(props) => props.theme.colors.tertiary};
color: white;
font-size: 0.75rem;
div {
    padding: 2rem;
    ul {
        padding: 0;
    }
}
div:last-of-type {
    justify-self: end;
    a {
        font-size: 3rem;

    }
}
a {
    color: white;
}
@media (max-width: ${(props) => props.theme.breakpoints.im}) {
grid-template-columns: repeat(2, auto);
div {
    padding: 1rem;
    justify-self: center;
}
div:last-of-type {
    justify-self: center;
}
}
`