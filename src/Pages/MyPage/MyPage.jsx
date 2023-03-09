import React, { useEffect, useState } from "react";
import Login from "../../Components/Partials/Login/Login";
import { useLoginStore } from "../../Components/Partials/Login/useLoginStore";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { MyPageStyled } from "./MyPage.Styled";
import { FaTicketAlt, FaHeart, FaStar, FaPen } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import appService from "../../Components/App/Appservices/AppService";

const MyPage = () => {
  const { loggedIn, userInfo } = useLoginStore();
  const { state: allBookings } = useGetApiDataFromEndpoint(
    "reservations",
    "items"
  );
  const [favorites, setFavorites] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);

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
  // removes favorite/review onClick, takes the id as a parameter
  // subtracts from deleteCount to ensure a rerender of the fetched items
  const deleteFavorite = (eventid) => {
    const remove = async () => {
      try {
        await appService.Remove("favorites", eventid);
        setDeleteCount(-1);
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
        setDeleteCount(-1);
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
                allBookings.map((booking, i) => (
                  <tr key={i}>
                    <td>{booking.startdate}</td>
                    <td>{booking.title}</td>
                    <td>{booking.stage_name}</td>
                    <td>{booking.amount}</td>
                    <td>{booking.price}</td>
                    <td>
                      <TiDeleteOutline />
                    </td>
                  </tr>
                ))}
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
                    {/* This code below was cowritten by chatGPT  */}
                    <td>
                      {Array.from(
                        { length: parseInt(review.num_stars) },
                        (_, i) => (
                          <span
                            key={i}
                            style={{ color: "#B08058", borderColor: "#B08058" }}
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
                            style={{ color: "#B08058", borderColor: "#B08058" }}
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
