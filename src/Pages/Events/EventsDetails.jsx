import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import DateRange from "../../Components/Partials/DateFormatter";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { EventsDetailsStyled } from "./EventsDetails.Styled";
import AddReview from "./Review/AddReview";

const EventsDetails = () => {
  // Destructuring of hooks
  const { id } = useParams();

  // Setting up variables and setter functions for useState
  const [eventDetails, setEventDetails] = useState({});
  const [reviews, setReviews] = useState([]);

  const [reviewSent, setReviewSent] = useState(false);

  console.log("reviews", reviews);

  // fetch the event from the id in the url using useParams
  // and sets result to state variables
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
        setReviews(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, [id, reviewSent]);
  return (
    <PageTwo
      title={`Forestillingen ${
        eventDetails && eventDetails?.title
      } hos Det Utrolige Teater`}
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
              <p>BILLETPRIS: {eventDetails.item.price} DKK</p>
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
              <p>{eventDetails.item.genre.toUpperCase()}</p>
              <pre>{eventDetails.item.description}</pre>
            </div>
            <div>
              <h3>MEDVIRKENDE</h3>
              <ul>
                {eventDetails.item.actors.map((actor, i) => (
                  <Link to={`/skuespillere/${actor.id}`}>
                    <li key={i}>
                      <img
                        src={actor.image}
                        alt={`Et billede af skuespilleren ${actor.name}`}
                      />
                      <h4>{actor.name}</h4>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h3>ANMELDELSER</h3>
              <ul>
                {reviews?.map((review, ix) => (
                  <li key={ix}>
                    <div>Antal stjerner {review.num_stars}</div>
                    <p>{review.created}</p>
                    <p>
                      {review.user.firstname.toUpperCase()} {review.user.lastname.toUpperCase()}
                    </p>
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            
            </div>
            <AddReview eventId={eventDetails.item.id} setReviewSent={setReviewSent}/>
          </>
        ) : (
          <p>Indlæser</p>
        )}
      </EventsDetailsStyled>
    </PageTwo>
  );
};

export default EventsDetails;
