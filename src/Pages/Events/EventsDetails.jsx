import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import DateRange from "../../Components/Partials/DateFormatter";
import Login from "../../Components/Partials/Login/Login";
import { useLoginStore } from "../../Components/Partials/Login/useLoginStore";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { EventsDetailsStyled } from "./EventsDetails.Styled";
import AddReview from "./Review/AddReview";
import { BsCardText } from "react-icons/bs";

const EventsDetails = () => {
  const { loggedIn } = useLoginStore();

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
            <div>
              <img
                src={eventDetails.item.image_large}
                alt={`Et billede fra forestillingen ${eventDetails.item.title}`}
              />
            </div>
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
                  <Link to={`/skuespillere/${actor.id}`} key={i}>
                    <li>
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
                    <div>
                      {/* This is coauthored by chatGPT */}
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          style={{
                            color: "#B08058",
                            textShadow: "0 0 1px #B08058, 0 0 2px #B08058",
                            padding: "0 2px",
                          }}
                        >
                          {i < parseInt(review.num_stars) ? "\u2605" : "\u2606"}
                        </span>
                      ))}
                    </div>
                    <p>{review.created}</p>
                    <p>
                      {review.user.firstname.toUpperCase()}{" "}
                      {review.user.lastname.toUpperCase()}
                    </p>
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
            {loggedIn ? (
              <AddReview
                eventId={eventDetails.item.id}
                setReviewSent={setReviewSent}
              />
            ) : (
              <div className="login">
                <div>
                  <h4><BsCardText /> Skriv en anmeldelse</h4>
                  <p>Du skal være logget ind for at skrive en anmeldelse</p>
                </div>
                <Login />
              </div>
            )}
          </>
        ) : (
          <p>Indlæser</p>
        )}
      </EventsDetailsStyled>
    </PageTwo>
  );
};

export default EventsDetails;
