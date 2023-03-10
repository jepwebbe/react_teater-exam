import React, { useEffect, useState } from "react";
import Login from "../../Components/Partials/Login/Login";
import { useLoginStore } from "../../Components/Partials/Login/useLoginStore";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { MyPageStyled } from "./MyPage.Styled";
import { FaTicketAlt, FaHeart, FaStar, FaPen } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import appService from "../../Components/App/Appservices/AppService";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";

const MyPage = () => {
  const { loggedIn, userInfo } = useLoginStore();

  const { state: events } = useGetApiDataFromEndpoint("events", "items");
  const [favorites, setFavorites] = useState([]);
  const [deleteCount, setDeleteCount] = useState(true);

  // uses the custom hook to fetch bookings and review
  // uses deleteCount in the dependency array
  const { state: allBookings } = useGetApiDataFromEndpoint(
    "reservations",
    "items",
    deleteCount
  );
  const { state: allReviews } = useGetApiDataFromEndpoint(
    "reviews",
    "items",
    deleteCount
  );

  // Filter out all reviews made by logged in user in new variable
  // parses the user_Id to an integer first
  const myReviews =
    loggedIn &&
    allReviews.filter(
      (item) => parseInt(item.user_id, 10) === userInfo.user_id
    );

  // fetches the favorites, sets deleteCount in dep. array
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("favorites");
        setFavorites(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [deleteCount]);

  // removes favorite/review/booking onClick, takes the id as a parameter
  // subtracts from deleteCount to ensure a rerender of the fetched items
  const deleteFavorite = (eventid) => {
    const remove = async () => {
      try {
        await appService.Remove("favorites", eventid);
        setDeleteCount(!deleteCount);
      } catch (error) {
        console.error(error);
      }
    };
    remove();
  };
  const deleteReview = (eventid) => {
    const remove = async () => {
      try {
        await appService.Remove("reviews", eventid);
        setDeleteCount(!deleteCount);
      } catch (error) {
        console.error(error);
      }
    };
    remove();
  };
  const deleteBooking = (bookingid) => {
    const remove = async () => {
      try {
        await appService.Remove("reservations", bookingid);
        setDeleteCount(!deleteCount);
      } catch (error) {
        console.error(error);
      }
    };
    remove();
  };
  return (
    <PageTwo
      title={`Hej ${userInfo.firstname} velkommen til Det Utrolige Teater`}
      description="Det Utrolige Teater er dit hjem for gode oplevelser."
    >
      <MyPageStyled>
        <div>
          <h2>Min side</h2>
          <Login />
        </div>
        <article>
          <h3>
            <FaTicketAlt /> MINE RESERVATIONER
          </h3>
          <table>
            <thead>
              <tr>
                <th>DATO & TID</th>
                <th>FORESTILLING</th>
                <th>SCENE</th>
                <th>ANTAL</th>
                <th>PRIS</th>
                <th>REDIGER</th>
              </tr>
            </thead>
            <tbody>
              {allBookings &&
                allBookings.map((booking, i) => {
                  const matchingEvent = events.find(
                    (event) => event.id === booking.event_id
                  );
                  return (
                    <tr key={i}>
                      <td>
                        {matchingEvent?.startdate} {matchingEvent?.starttime}
                      </td>
                      <td>{matchingEvent ? matchingEvent.title : ""}</td>
                      <td>{matchingEvent ? matchingEvent.stage_name : ""}</td>
                      <BookingDetails
                        bookingId={booking.id}
                        price={matchingEvent?.price}
                      />
                      <td>
                        <TiDeleteOutline
                          className="delete"
                          onClick={() => deleteBooking(booking.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </article>
        <article>
          <h3>
            <FaHeart /> MINE FAVORITTER
          </h3>
          <table>
            <thead>
              <tr>
                <th>FORESTILLING</th>
                <th>REDIGER</th>
              </tr>
            </thead>
            <tbody>
              {favorites &&
                favorites.map((favorite, i) => (
                  <tr key={i}>
                    <td>{favorite.title}</td>
                    <td>
                      <TiDeleteOutline
                        className="delete"
                        onClick={() => deleteFavorite(favorite.event_id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </article>
        <article>
          <h3>
            <FaStar /> MINE ANMELDELSER
          </h3>
          <table>
            <thead>
              <tr>
                <th>FORESTILLING</th>
                <th>EMNE</th>
                <th>ANTAL STJERNER</th>
                <th>REDIGER</th>
              </tr>
            </thead>
            <tbody>
              {myReviews &&
                myReviews.map((review, i) => (
                  <tr key={i}>
                    <td>{review.event_title}</td>
                    <td>{review.subject}</td>
                    {/* 
                    This code creates 2 arrays, writes a filled star for the number in the review.num_stars
                    fills out the rest with an empty star by substraction
                    and it uses the html entity for star,
                     */}
                    <td>
                      {Array.from(
                        { length: parseInt(review.num_stars) },
                        (_, i) => (
                          <span
                            key={i}
                            style={{ color: "#D39D5B", borderColor: "#D39D5B" }}
                          >
                            &#9733;
                          </span>
                        )
                      )}
                      {Array.from(
                        { length: 5 - parseInt(review.num_stars) },
                        (_, i) => (
                          <span
                            key={i}
                            style={{ color: "#D39D5B", borderColor: "#D39D5B" }}
                          >
                            &#9734;
                          </span>
                        )
                      )}
                    </td>

                    <td>
                      <FaPen className="edit" />{" "}
                      <TiDeleteOutline
                        className="delete"
                        onClick={() => deleteReview(review.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </article>
      </MyPageStyled>
    </PageTwo>
  );
};

export default MyPage;

const BookingDetails = ({ bookingId, price }) => {
  const { state: bookingDetails } = useGetByIdApiDataFromEndpoint(
    "reservations",
    bookingId
  );
  return (
    <>
      <td>
        {bookingDetails.reservation &&
          bookingDetails.reservation.reservationlines.length}
      </td>
      <td>
        {bookingDetails.reservation &&
          bookingDetails.reservation.reservationlines.length * price}
        .00
      </td>
    </>
  );
};
