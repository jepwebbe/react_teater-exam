import React from "react";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { EventsStyled } from "./Events.Styled";

export const Events = () => {
  const pageTitle = "Dette er din produktside";
  return (
    <PageTwo title={pageTitle} description="beskrivelse">
      <EventsStyled>
        <div>
          <h1>{pageTitle}</h1>
        </div>
        <div>b</div>

      </EventsStyled>
    </PageTwo>
  );
};
