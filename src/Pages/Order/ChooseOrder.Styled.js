import styled from "styled-components";

export const ChooseOrderStyled = styled.section`
  // boxed div
  > div:nth-child(1) {
    // image div
    > div:nth-child(1) {
      img {
      }
    }
    // event and contact info
    > div:nth-child(2) {
      // event info
      > div:nth-child(2) {
      }
    }
    // ticket selection
    > div:nth-child(3) {
      span {
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.colors.secondary};
        display: inline-block;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }
      span.bookedNow {
        background-color: ${(props) => props.theme.colors.tertiary};
      }
      span.booked {
        background-color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;
