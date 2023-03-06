import React, { useEffect, useState } from "react";
import { useLoginStore } from "./Login/useLoginStore";
import Login from "./Login/Login";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { StyledLoginPage } from "./LoginPage.Styled";
import appService from "../../Components/App/Appservices/AppService";
import { Link } from "react-router-dom";
import { EditComment } from "./EditComment";

export const LoginPage = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);

  // Destructuring of needed hooks
  const { loggedIn, username } = useLoginStore();
  const { userInfo } = useLoginStore();

  // Boolean state to show-hide the edit box via the toggle arrow function
  const [displayEdit, setDisplayEdit] = useState(false);
  const toggleEdit = () => {
    displayEdit ? setDisplayEdit(false) : setDisplayEdit(true);
  };

  // fetch usin appservice axios the reviews and set them to allReviews
  // rerenders whenever deleteCount is run (is is changed when a a comment has been deleted)
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.Get("reviews");
        setAllReviews(result.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [deleteCount]);

  // Filter out all reviews made by logged in user in new variable
  // parses the user_Id to an integer first
  const myReviews =
    loggedIn &&
    allReviews.filter(
      (item) => parseInt(item.user_id, 10) === userInfo.user_id
    );

  // Updates the comment (currently not functional)
  // Posts postData to the endpoint w. the commentId (postData.Id)

  // Deletes a given comment and sets it to a variable deleteCount
  // which onchange rerenders the fetch of comments
  const deleteComment = async (id) => {
    try {
      await appService.Remove("reviews", id);
      setDeleteCount(deleteCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  // State and fetch to display houses favorited when logged in
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (loggedIn) {
      const getData = async () => {
        try {
          const result = await appService.Get("favorites");
          setFavorites(result.data.items);
          console.log(result.data.items);
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  }, [loggedIn]);

  return (
    <PageTwo
      title={loggedIn ? username + " er logget ind" : "Log ind på din profil"}
    >
      <StyledLoginPage>
        <h2>Administration</h2>
        {loggedIn ? (
          <>
            <section>
              <h3>Anmeldelser</h3>
              <table>
                <thead>
                  <tr>
                    <th>Titel</th>
                    <th>Dato</th>
                    <th>Handling</th>
                  </tr>
                </thead>
                <tbody>
                  {myReviews.map((item, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.created}</td>
                        <td>
                          <button onClick={() => toggleEdit()} className="edit">
                            Rediger
                          </button>
                          <button
                            onClick={() => deleteComment(item.id)}
                            className="delete"
                          >
                            Slet
                          </button>
                        </td>
                      </tr>
                      {displayEdit ? (
                        <EditComment
                        id={item.id}
                        title={item.title}
                        num_stars={item.num_stars}
                        content={item.content}
                        />
                      ) : null}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </section>
            <article>
              <h3>Favoritter</h3>
              {favorites &&
                favorites.map((fav, ix) => (
                  <Link key={ix} to={`/boliger/${fav.home_id}`}>
                    <h4>{fav.address}</h4>
                  </Link>
                ))}
            </article>
          </>
        ) : (
          <p>Du er ikke logget ind</p>
        )}
        <Login />
      </StyledLoginPage>
    </PageTwo>
  );
};
