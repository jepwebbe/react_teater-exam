import styled from "styled-components";

export const StyledGrid = styled.main`
  padding: 0 1rem;
  grid-area: main;
  background-color: ${(props) => props.theme.colors.primaryBg};
  height: 100%;
  > :first-child {
    height: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: ${(props) => props.theme.mobile.columns};
    grid-template-rows: ${(props) => props.theme.mobile.rows};
    grid-template-areas: ${(props) => props.theme.mobile.area};
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns: ${(props) => props.theme.tablet.columns};
      grid-template-rows: ${(props) => props.theme.tablet.rows};
      grid-template-areas: ${(props) => props.theme.tablet.area};
    }
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      grid-template-columns: ${(props) => props.theme.desktop.columns};
      grid-template-rows: ${(props) => props.theme.desktop.rows};
      grid-template-areas: ${(props) => props.theme.desktop.area};
    }
  }
`;
