import styled from "styled-components";

export const EventsDetailsStyled = styled.section`
  border-left: 1px solid ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.secondary};
  > div:nth-child(1) {
    border: 15px solid ${(props) => props.theme.colors.secondary};
    aspect-ratio: 1150 / 684;
    overflow: hidden;
    position: relative;
    img {
      transform: scale(1.2);
    }
    svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
  }
  // Event date and price and stage
  > div {
    padding: 0 1rem;
  }
  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.theLightGrey};
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
    border-top: 1px solid ${(props) => props.theme.colors.secondary};
    border-top-style: dashed;
    h3 {
      border-bottom: 1px solid #dfdfdf;
      margin: 0;
      padding: 1rem 0;
    }
    ul {
      padding: 0;
      li {
        border-bottom: 1px solid #dfdfdf;
        > p:nth-child(2) {
          font-size: 0.8rem;
          color: ${(props) => props.theme.colors.theLightGrey};
        }
        > p:nth-child(3) {
          font-weight: bold;
          font-size: 1.2rem;
        }
        > p:nth-child(4) {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }
  div.login {
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 2rem 0;
    svg {
      color: white;
      font-size: 1.5rem;
    }
    h4, p {
      color: white;
      padding: 0;
      margin: 0 0 0 1rem;
      font-size: 1.5rem;
    }
    span {
      color: red;
      margin-left: 3.5rem;
    }
    input {
      display: block;
      margin-bottom: 1rem;
      border-radius: 5px;
    }
    p,
    input, h4 {
      margin-left: 3.5rem;
    }
    input {
      margin-bottom: 0;
      line-height: 1.5;
    }
    button {
      background-color: ${(props) => props.theme.colors.theGreen};
      border: none;
      color: white;
      width: 4rem;
      cursor: pointer;
    }
  }
`;
