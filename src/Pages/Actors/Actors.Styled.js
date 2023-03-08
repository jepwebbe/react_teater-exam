import styled from "styled-components";

export const ActorsStyled = styled.section`
h2 {
    font-size: 2.5rem;
    margin: 1rem 0;
    color: ${props => props.theme.colors.primary}
}
li {
    display: grid;
    grid-template-columns: 1fr 3fr 0.7fr;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dfdfdf;
    img {
        max-height: 200px;
        place-self: center;
    }
    h3 {
        margin-top: 0;
    }
    pre {
      color: ${(props) => props.theme.colors.primary};
      white-space: pre-wrap;
      width: 100%;
      font-family: "Titilium";
      text-align: justify;
      display: block;
    }
    a {
        place-self: end;
    }
}

@media (max-width: ${(props) => props.theme.breakpoints.im}) {
    li {
        grid-template-columns: 1fr;
        a {
            justify-self: start;
        }
    }
}

`