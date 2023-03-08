import styled from "styled-components";

export const RandomStyled = styled.div`
  margin-top: 3rem;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    padding: 0 1rem 1rem 0;
    article {
      text-align: right;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      h2 {
        font-size: 3rem;
        height: 6.3rem;
        color: ${(props) => props.theme.colors.primary};
        margin: 0;
      }
      // image and container
      >div:nth-child(1) {
        aspect-ratio: 1/1;
        overflow: hidden;
        border: 6px solid ${(props) => props.theme.colors.secondary};
        img {
          margin-top: 3rem;
          transform: scale(2);
        }
      }
      >div:nth-child(2) {
        padding: 0 1rem 1rem 1rem;
      p:nth-child(2),
      p:nth-child(5) {
        color: ${(props) => props.theme.colors.theLightGrey};
      }
      p:nth-child(3) {
        border-bottom: 1px solid #dfdfdf;
      }
      a:last-of-type {
        margin-left: 1rem;
      }
    }
    }
  }
  // se alle forestillinger button
  >div:last-of-type {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
    > a {
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.il}) {
   div article h2 {
      font-size: 2.5rem;
      height: 5rem;
    }
    div article a:last-of-type {
      margin-left: 0.5rem;
    }
    div article a {
      padding: 0.3rem 0.8rem;
    }
  }

`;
