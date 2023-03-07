import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../Components/Partials/CTAButton";
import DateRange from "../Components/Partials/DateFormatter";
import { useSearchResultsStore } from "../Components/Partials/Header/Search/useSearchResultStore";
import { EventsListedStyled } from "../Styles/EventsListedStyled";
import { PageTwo } from "../Styles/PageTemplate/PageTwo";

const SearchResult = () => {
  const { searchResults } = useSearchResultsStore();
  return (
    <PageTwo title={`Søgeresultater på Det Utrolige Teater`} description="Her kan du se de forestillinger, du har søgt på">
      {searchResults?.length > 0 ? (
        searchResults.map((item, i) => (
          <EventsListedStyled mTop="3rem" key={i}>
            <li>
              <div>
                <img
                  src={item.image_small}
                  alt={`Et billede fra forestillingen ${item.title}`}
                />
              </div>

              <h3>{item.title}</h3>
              <div>
                <p>{item.stage_name}</p>
                <DateRange dateRange={item.startdate + " - " + item.stopdate} />
              </div>
              <div>
                <Link to={`/events/${item.id}`}>
                  <CTAButton
                    width="1rem"
                    bgColor={(props) => props.theme.colors.tertiary}
                    btnText="LÆS MERE"
                  />
                </Link>
                <Link to="/">
                  <CTAButton
                    width="1rem"
                    bgColor={(props) => props.theme.colors.primary}
                    btnText="KØB BILLET"
                  />
                </Link>
              </div>
            </li>
          </EventsListedStyled>
        ))
      ) : (
        <p>Din søgning gav ingen resultater</p>
      )}
    </PageTwo>
  );
};

export default SearchResult;
