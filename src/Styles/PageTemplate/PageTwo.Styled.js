import styled from 'styled-components'

export const StyledGrid = styled.main`
  grid-area: main;
  height: 100%;
  padding: 0 1rem;
  >:first-child {
    height: 100%;
    display: grid;
    gap: 1rem;
    background-color: ${(props) => props.theme.colors.primaryBg};
    grid-template-columns: ${(props) => props.theme.mobileTwo.columns};
    grid-template-rows: ${(props) => props.theme.mobileTwo.rows};
    grid-template-areas: ${(props) => props.theme.mobileTwo.area};
    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns: ${(props) => props.theme.tabletTwo.columns};
      grid-template-rows: ${(props) => props.theme.tabletTwo.rows};
      grid-template-areas: ${(props) => props.theme.tabletTwo.area};
    }
    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      grid-template-columns: ${(props) => props.theme.desktopTwo.columns};
      grid-template-rows: ${(props) => props.theme.desktopTwo.rows};
      grid-template-areas: ${(props) => props.theme.desktopTwo.area};
    }
  }
`;