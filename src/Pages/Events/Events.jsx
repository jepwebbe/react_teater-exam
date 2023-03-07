import React from "react";
import Hero from "../../Components/Partials/Hero";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import EventList from "./EventList";
import { EventsStyled } from "./Events.Styled";

export const Events = () => {
  const pageTitle = "Dette er din produktside";
  return (
    <PageTwo title={pageTitle} description="beskrivelse">
      <EventsStyled>
        <Hero />
        <EventList />
      </EventsStyled>
    </PageTwo>
  );
};
