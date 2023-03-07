import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import DateRange from "../../Components/Partials/DateFormatter";
import { useLoginStore } from "../../Components/Partials/Header/Login/useLoginStore";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import Login from "../Login/Login";
import { EventsDetailsStyled } from "./EventsDetails.Styled";

const EventsDetails = () => {
  // Destructuring of hooks
  const { loggedIn } = useLoginStore();
  const { id } = useParams();

  // Setting up variables and setter functions for useState
  const [eventDetails, setEventDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  console.log("reviews", reviews);

  // fetch the event from the id in the url using useParams
  // and sets result to state variable
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("events", id);
        setEventDetails(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    const getReviews = async () => {
      try {
        const result = await appService.Get(`reviews?event_id=${id}`);
        setReviews(result.data.items)
      } catch (error) {
        console.error(error)
      }
    };
    getReviews();
  }, [id]);
  return (
    <PageTwo
      title={`${eventDetails?.title} hos Det Utrolige Teater`}
      description={`Se meget mere information om spilletider, book og pris om ${eventDetails?.title}`}
    >
      <EventsDetailsStyled>
        {eventDetails.item ? (
          <>
            <img
              src={eventDetails.item.image_large}
              alt={`Et billede fra forestillingen ${eventDetails.item.title}`}
            />
            <div>
              <div>
                <p>{eventDetails.item?.stage_name.toUpperCase()}</p>{" "}
                <DateRange
                  dateRange={
                    eventDetails.item.startdate +
                    " - " +
                    eventDetails.item.stopdate
                  }
                />
              </div>
              <p>Billetpris: {eventDetails.item.price}</p>
            </div>
            <div>
              <h2>{eventDetails.item.title}</h2>
              <CTAButton
                width="1rem"
                bgColor={(props) => props.theme.colors.secondary}
                btnText="KØB BILLET"
              />
            </div>
            <div>
              <p>{eventDetails.item.genre}</p>
              <p>{eventDetails.item.description}</p>
            </div>
            <div>
              <h3>MEDVIRKENDE</h3>
              {eventDetails.item.actors.map((actor, i) => (
                <ul key={i}>
                  <Link to={`/skuespillere/${actor.id}`}>
                    <li><img src={actor.image} alt={`Et billede af skuespilleren ${actor.name}`} /></li>
                    <h4>{actor.name}</h4>
                  </Link>
                </ul>
              ))}
            </div>
            <div>
              <h3>ANMELDELSER</h3>
              {reviews?.map((review, ix) => (
                <ul key={ix}>
                  <li>
                    <div>{review.num_stars}</div>
                    <p>{review.created}</p>
                    <p>{review.user.firstname} {review.user.lastname}</p>
                    <p>{review.comment}</p>
                  </li>
                </ul>
              ))}
              {loggedIn ? <form>pøls</form> : <Login />}
            </div>
          </>
        ) : (
          <p>Indlæser</p>
        )}
      </EventsDetailsStyled>
    </PageTwo>
  );
};

export default EventsDetails;
