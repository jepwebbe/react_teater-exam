import styled from "styled-components";

export const EventsListedStyled = styled.ul`
  // eventlist section
  margin-top: ${props => props.mTop};
  padding: 0;
  li {
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1.8fr 5fr 3fr;
    align-items: center;
    height: 100px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    div:nth-child(1) {
      height: 100%;
      width: 100%;
      overflow: hidden;
      border: 3px solid ${(props) => props.theme.colors.secondary};
      img {
        height: 100%;
        width: 100%;
        object-fit: cover; 
        margin-top: 1rem;
        transform: scale(1.5);
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
      p {
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

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    li {
      height: 70px;
      grid-template-columns: 1fr 2fr 3fr 3fr;
      div:nth-child(1) {

      }
    }
  }
`;
