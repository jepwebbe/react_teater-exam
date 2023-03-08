import styled from "styled-components";

export const ActorsDetailsStyled = styled.article`
  height: auto;
  h2 {
    font-size: 2.5rem;
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.primary};
  }
  > div {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    h3 {
      margin: 0;
    }
    pre {
      color: ${(props) => props.theme.colors.primary};
      white-space: pre-wrap;
      width: 100%;
      font-family: "Titilium";
      text-align: justify;
      display: block;
    }
  }
  a {
    margin-left: auto;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    >div {
      grid-template-columns: 1fr;
    }
  }
`;
