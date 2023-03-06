import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button.burger {
    display: none;
  }
  ul {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 0;
    margin: 0;

    li a {
      color: black;
     }
  }
  ul .active {
    color: ${(props) => props.theme.colors.primary};
  }
  form {
    display: grid;
    width: 40%;
    justify-items: end;
    margin-left: auto;
    input {
      grid-area: 1/ 1/-1 /-1;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.theGrey};
    }
    button {
      border: none;
      grid-area: 1/ 1/-1 /-1;
      background-color: transparent;
      svg {
        fill: ${(props) => props.theme.colors.theGrey};
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    button {
      display: block;
      background-color: transparent;
      border: none;
      padding: 1rem;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
    ul {
      flex-direction: column;
      background: white;
      padding: 1rem;
      margin: 0;
      width: 50vw;
    }
  } ;
`;
