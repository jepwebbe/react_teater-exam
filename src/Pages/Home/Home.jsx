import React from "react";
import { Page } from "../../Styles/PageTemplate/Page";
import { HomeStyled } from "./Home.Styled";

const Home = () => {
  const pageTitle = "Dette er din forside"
  return (
    <Page title={pageTitle} description="Dette er hjem">
      <HomeStyled>
        <div>a <h1>{pageTitle}</h1></div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </HomeStyled>
    </Page>
  );
};

export default Home;
