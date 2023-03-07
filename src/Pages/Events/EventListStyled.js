import styled from "styled-components";

export const EventListStyled = styled.section`
// heading section
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.primary};
      margin: 0;
    }
    select {
        height: 2rem;
        width: 10rem;
    }
  }
  // eventlist section
  ul {
    padding: 0;
    li {
      display: grid;
      grid-template-columns: 1.2fr 1.8fr 5fr 3fr;
      align-items: center;
      height: 100px;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      // image
      div:nth-child(1) {
        aspect-ratio: 1 / 1;
        height: 100%;
        overflow: hidden;
        border: 3px solid ${(props) => props.theme.colors.secondary};
        img {
          transform: scale(1.8);
          margin-top: 1rem;
        }
      }
      h3 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.7rem;
        margin: 0;
      }
      //date and venue
      div:nth-child(3) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80%;
        border-left: 1px solid #dfdfdf;
        p{
            margin: 0;
        }
        p:first-of-type {
          color: ${(props) => props.theme.colors.theLightGrey};
        }
        p:last-of-type {
            font-weight: bolder;
        }
      }
      // ctabuttons
      div:nth-child(4) {
        a:last-of-type {
          margin-left: 1rem;
        }
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    ul li {
      height: 80px;
      div:nth-child(1) {
        aspect-ratio: unset;
      }
    }
  }
`;
