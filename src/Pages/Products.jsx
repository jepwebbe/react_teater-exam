import React from "react";
import { PageTwo } from "../Styles/PageTemplate/PageTwo";
import { ProductsStyled } from "./Products.Styled";

export const Products = () => {
  const pageTitle = "Dette er din produktside";
  return (
    <PageTwo title={pageTitle} description="beskrivelse">
      <ProductsStyled>
        <div>
          <h1>{pageTitle}</h1>
        </div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </ProductsStyled>
    </PageTwo>
  );
};
