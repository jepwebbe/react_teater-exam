import styled from "styled-components";

export const HeroStyled = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  margin-top: 2rem;
  > div:nth-child(1) {
    display: grid;
    grid-template-rows: 2fr 1.7fr;
    padding: 0 1rem;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    aspect-ratio: 385/306;
    height: 100%;
    > div:nth-child(1) {
      display: grid;
      place-content: end;
      border-bottom: 1px solid #dfdfdf;
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
        text-align: right;
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
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    div.imageWrap {
      width: auto;
      height: 100%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: 1fr;
    > div:nth-child(1){
      grid-area: 1 / 1 / -1 / -1;
      z-index: 2000;
      place-self: center;
      background-color: #ffffff90;
      height: auto;
    }
    div.imageWrap {
      grid-area: 1 / 1 / -1 / -1;
    }

  }
  @media (max-width: ${(props) => props.theme.breakpoints.im}) {
    div.imageWrap {
      aspect-ratio: 350 / 250;
      img {
        transform: scale(1.5); 

      }
    }
  }
`;
