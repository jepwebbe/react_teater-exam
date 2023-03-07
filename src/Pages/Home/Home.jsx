import React from "react";
import { Page } from "../../Styles/PageTemplate/Page";
import Hero from "./Hero";
import { HomeStyled } from "./Home.Styled";
import Random from "./Random";

const Home = () => {
  const pageTitle = "Dette er din forside"
  return (
    <Page title={pageTitle} description="Dette er hjem">
      <HomeStyled>
        <Hero />
        <Random />
      </HomeStyled>
    </Page>
  );
};

export default Home;
