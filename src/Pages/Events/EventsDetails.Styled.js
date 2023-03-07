import styled from "styled-components";

export const EventsDetailsStyled = styled.section`
    border-left: 1px solid ${(props) => props.theme.colors.secondary};
    border-right: 1px solid ${(props) => props.theme.colors.secondary};
  > img {
    border: 10px solid ${(props) => props.theme.colors.secondary};
  }
  // Event date and price and stage
  >div {
    padding: 0 1rem;
  }
  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.theLightGrey}
  }
  div:nth-child(2) {

    display: flex;
    justify-content: space-between;
    > div {
      p {
        margin: 0;
      }
      p:last-of-type {
        font-size: 1.3rem;
        color: ${(props) => props.theme.colors.theLightGrey};
      }
    }
    p {
        font-size: 1.3rem;
    }
  }
  // Event title and CTA
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 0;
      color: ${(props) => props.theme.colors.primary};
      font-size: 2.5rem;
      padding: 0;
    }
    span {
      font-size: 1.35rem;
      font-weight: bolder;
      height: 95%;
    }
  }
  // Event description and genre
  div:nth-child(4) {
    p {
      margin: 0;
      color: ${(props) => props.theme.colors.theLightGrey};
      font-size: 1.2rem;
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
  // Actors
  div:nth-child(5) {

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      padding: 0;
      a {
        color: ${(props) => props.theme.colors.primary};
        li {
          border: 1px solid ${(props) => props.theme.colors.secondary};
          height: 100%;
          h4 {
            margin: 0;
            text-align: center;
            padding: 0.5rem;
          }
        }
      }
    }
  }
  // Reviews
  div:nth-child(6) {

    ul {
        padding: 0;
        li {
            border-bottom: 1px solid #DFDFDF;
            >p:nth-child(2) {
                font-size: 0.8rem;
                color: ${props => props.theme.colors.theLightGrey}
            }
            >p:nth-child(3) {
                font-weight: bold;
                font-size: 1.2rem;
            }
            >p:nth-child(4) {
                color: ${props => props.theme.colors.primary}
            }
        }
    }
  }
`;
