import React from "react";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import styled from "styled-components";
const Thanks = () => {
  return (
    <PageTwo>
      <ThanksStyled>
        <h2>Tak for din bestilling</h2>
      </ThanksStyled>
    </PageTwo>
  );
};

export default Thanks;

const ThanksStyled = styled.div`
border: 1px solid ${props => props.theme.colors.secondary};
height: 15rem;
  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.5rem;
    text-align: center;
  }
`;
