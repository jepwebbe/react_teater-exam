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
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const EventsDetails = () => {
  // Destructuring of hooks
  const { id } = useParams();
  const { loggedIn } = useLoginStore();

  // Setting up variables and setter functions for useState
  const [eventDetails, setEventDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewSent, setReviewSent] = useState(false);
  // favoritesCount only used to rerender fetch of favorites
  // favorites used to hold api data
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  // fetch the event from the id in the url using useParams
  // and sets result to state variables
  // rerenders when id or reviewState state changes

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
    // Gets the reviews from the event id from useParams and sets it to state
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

  // If user is logged in, it fetches favorites. Rerenders when loggedIn or favoritesCount changes
  // to change appearance of favorite-icon
  useEffect(() => {
    if (loggedIn) {
      const getData = async () => {
        try {
          const result = await appService.Get("favorites");
          setFavorites(result.data.items);
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  }, [loggedIn, favoritesCount]);
    // posts a favorite onClick, takes the id as a parameter
  // adds to faveoritesCount to ensure a rerender of the favorite fetch
  const postFavorite = (eventid) => {
    const add = async () => {
      try {
        await appService.Create("favorites", { event_id:eventid });
        setFavoritesCount(+1);
      } catch (error) {
        console.error(error);
      }
    };
    add();
  };
  // removes favorite onClick, takes the id as a parameter
  // subtracts from faveoritesCount to ensure a rerender of the favorite fetch
  const deleteFavorite = (eventid) => {
    const remove = async () => {
      try {
        await appService.Remove("favorites", eventid );
        setFavoritesCount(-1);
      } catch (error) {
        console.error(error);
      }
    };
    remove();
  };

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
              {loggedIn ? (
                favorites?.find((item) => item.event_id === eventDetails.item.id) ? (
                  <AiFillHeart
                    onClick={() => deleteFavorite(eventDetails.item.id)}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => postFavorite(eventDetails.item.id)}
                  />
                )
              ) : (
                <Link to="/login">
                  <AiOutlineHeart />
                </Link>
              )}
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
              <Link to={`/events/${eventDetails.item.id}/bestil`}>
                <CTAButton
                  width="1rem"
                  bgColor={(props) => props.theme.colors.secondary}
                  btnText="KØB BILLET"
                />
              </Link>
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
                  <h4>
                    <BsCardText /> Skriv en anmeldelse
                  </h4>
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
