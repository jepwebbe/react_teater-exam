import styled from "styled-components";

export const HeroStyled = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  > div:nth-child(1) {
    display: grid;
    grid-template-rows: 2fr 1.7fr;
    margin: 0 1rem;
    > div:nth-child(1) {
      display: grid;
      place-content: end;
      border-bottom: 1px solid #DFDFDF;
      > p:nth-child(1) {
        color: ${(props) => props.theme.colors.theLightGrey};
      }
      p {
        margin: 0;
        text-align: right;
      }
    }
    > div:nth-child(2) {
      h2 {
        font-size: 3rem;
        color: ${(props) => props.theme.colors.primary};
        margin: 0;
      }
      p {
        color: ${(props) => props.theme.colors.theLightGrey};
        text-align: right;
      }
    }
  }

  div.imageWrap {
    aspect-ratio: 842/369;
    overflow: hidden;
    border: 6px solid ${(props) => props.theme.colors.tertiary};
    img {
      margin-top: -4rem;
    }
  }
`;
