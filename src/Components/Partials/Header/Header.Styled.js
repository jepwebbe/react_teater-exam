import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  width: 77vw;
  height: 7rem;
  position: fixed;
  top: 0;
  left: 11vw;
  right: 11vw;
  z-index: 2000;
  background-color: white;
  display: flex;
  justify-content: space-between;
  a h1 {
    height: 100%;
    img {
      height: 100%;
      padding: 1rem 0;
      margin: 0;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
  }
`;
