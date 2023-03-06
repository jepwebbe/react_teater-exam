import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  a img {
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {


  }
`;
