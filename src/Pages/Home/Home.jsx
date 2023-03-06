import React from "react";
import { Page } from "../../Styles/PageTemplate/Page";
import Hero from "./Hero";
import { HomeStyled } from "./Home.Styled";

const Home = () => {
  const pageTitle = "Dette er din forside"
  return (
    <Page title={pageTitle} description="Dette er hjem">
      <HomeStyled>
        <div><Hero /></div>
        <div>b</div>
        <div>c</div>

      </HomeStyled>
    </Page>
  );
};

export default Home;
