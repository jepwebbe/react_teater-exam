import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import DateRange from "../../Components/Partials/DateFormatter";
import { EventListStyled } from "./EventListStyled";

const EventList = () => {
  const [events, setEvents] = useState([]);
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
  return (
    <EventListStyled>
      <div>
        <select>
          <option value="">Filter</option>
        </select>
        <h2>Oversigt</h2>
      </div>
      {events.length > 0 ? (
        events.map((item, i) => (
          <ul key={i}>
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
          </ul>
        ))
      ) : (
        <p>Indlæser</p>
      )}
    </EventListStyled>
  );
};

export default EventList;
