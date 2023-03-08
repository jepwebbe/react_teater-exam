import styled from "styled-components";

export const EventListStyled = styled.section`
// heading section - the rest is in Styles EventsListedStyled
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

`;
