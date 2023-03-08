import React from "react";
import Login from "../../Components/Partials/Login/Login";
import { useLoginStore } from "../../Components/Partials/Login/useLoginStore";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { MyPageStyled } from "./MyPage.Styled";
import { FaTicketAlt, FaHeart, FaStar, FaPen } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const MyPage = () => {
  const { loggedIn, userInfo } = useLoginStore();
  const { state: allReviews } = useGetApiDataFromEndpoint("reviews", "items");
  const { state: allBookings } = useGetApiDataFromEndpoint(
    "reservations",
    "items"
  );
  const { state: allFavorites } = useGetApiDataFromEndpoint(
    "favorites",
    "items"
  );
  console.log("user", userInfo);

  // Filter out all reviews made by logged in user in new variable
  // parses the user_Id to an integer first
  const myReviews =
    loggedIn &&
    allReviews.filter(
      (item) => parseInt(item.user_id, 10) === userInfo.user_id
    );
  console.log("myreviews", myReviews);
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
              {allFavorites &&
                allFavorites.map((favorite, i) => (
                  <tr key={i}>
                    <td>{favorite.title}</td>
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
                      <FaPen /> <TiDeleteOutline />
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
