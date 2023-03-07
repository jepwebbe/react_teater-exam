import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import DateRange from "../../Components/Partials/DateFormatter";
import { EventListStyled } from "./EventListStyled";
import { EventsListedStyled } from "../../Styles/EventsListedStyled";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [sortMe, setSortMe] = useState("");

  console.log("events", events);
  // fetch the house from the id in the url using useParams
  // and sets result to state variable
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetList("events");
        setEvents(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // function that handles the selected sort
  const handleSortChange = (e) => {
    setSortMe(e.target.value);
  };

  // Sorting the events based on the select parameter
  // localCompare compares strings based on the locale of the user
  const sortedEvents = events.sort((a, b) => {
    if (sortMe === "popularity") {
      return a.startdate.localeCompare(b.startdate);
    } else if (sortMe === "priceAsc") {
      return a.price - b.price;
    } else if (sortMe === "priceDesc") {
      return b.price - a.price;
    } else if (sortMe === "nameAsc") {
      return a.title.localeCompare(b.title);
    } else if (sortMe === "nameDesc") {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  return (
    <EventListStyled>
      <div>
        <select value={sortMe} onChange={handleSortChange}>
          <option value="">Filter</option>
          <option value="popularity">Sorter efter popularitet(tid)</option>
          <option value="priceDesc">Sorter efter pris (faldende)</option>
          <option value="priceAsc">Sorter efter pris (stigende)</option>
          <option value="nameAsc">Sorter efter titel (A - Å)</option>
          <option value="nameDesc">Sorter efter titel (Å - A)</option>
        </select>
        <h2>Oversigt</h2>
      </div>
      {events.length > 0 ? (
        sortedEvents.map((item, i) => (
          <EventsListedStyled key={i}>
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
        <p>Indlæser</p>
      )}
    </EventListStyled>
  );
};

export default EventList;
