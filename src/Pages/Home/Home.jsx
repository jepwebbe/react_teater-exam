import React from "react";
import Hero from "../../Components/Partials/Hero";
import { Page } from "../../Styles/PageTemplate/Page";
import { HomeStyled } from "./Home.Styled";
import Random from "./Random";

const Home = () => {
  const pageTitle = "Velkommen til Det Utrolige Teater"
  return (
    <Page title={pageTitle} description="Hjem for mange magiske oplevelser">
      <HomeStyled>
        <Hero />
        <Random />
      </HomeStyled>
    </Page>
  );
};

export default Home;
