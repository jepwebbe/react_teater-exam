import React from "react";
import Hero from "../../Components/Partials/Hero";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import EventList from "./EventList";
import { EventsStyled } from "./Events.Styled";

export const Events = () => {
  const pageTitle = "Det Utrolige Teater - vores forestillinger";
  return (
    <PageTwo title={pageTitle} description="Her kan du se en liste over vores kommende forestillinger">
      <EventsStyled>
        <Hero />
        <EventList />
      </EventsStyled>
    </PageTwo>
  );
};
