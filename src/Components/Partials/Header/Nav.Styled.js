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
    li:last-of-type {
      padding-right: 2rem;
      position: relative;
      cursor: pointer;
      p {
        margin: 0;
      }
      > div {
        position: absolute;
        top: 100%;
        left: -300%;
        background-color: ${(props) => props.theme.colors.secondary};
        display: grid;
        padding: 1rem;
        input {
          border: none;
          line-height: 2;
          margin-top: 0.2rem;
        }
        div {
          display: flex;
          button {
            background-color: ${(props) => props.theme.colors.theGreen};
            border: none;
            color: white;
            border-radius: 0 0.3rem 0.3rem 0px;
            font-size: 0.75rem;
            margin-top: 0.2rem;
            margin-left: 0.2rem;
            width: 4rem;
          }
        }
      }
    }
  }
  ul .active {
    color: ${(props) => props.theme.colors.primary};
  }
  > form {
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
    display: grid;
    button.burger {
      justify-self: end;
      display: block;
      background-color: transparent;
      border: none;
      padding: 1rem;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      svg {
        font-size: 2rem;
      }
    }
    > form {
      margin-left: unset;
      input {
        background-color: white;
      }
    }
    ul {
      flex-direction: column;
      padding: 1rem;
      margin: 0;
      background-color: white;
      z-index: 1000;
    }
  } ;
`;
