import React from "react";
import Login from "../../Components/Partials/Login/Login";
import { useLoginStore } from "../../Components/Partials/Login/useLoginStore";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { MyPageStyled } from "./MyPage.Styled";

const MyPage = () => {
  const { loggedIn, userInfo } = useLoginStore();
  const { state: allReviews } = useGetApiDataFromEndpoint("reviews", "items");
  console.log("all reviews", allReviews);
  console.log("userinfo", userInfo.user_id);

  // Filter out all reviews made by logged in user in new variable
  // parses the user_Id to an integer first
  const myReviews =
    loggedIn &&
    allReviews.filter(
      (item) => parseInt(item.user_id, 10) === userInfo.user_id
    );
    console.log("myreviews", myReviews)
  return (
    <MyPageStyled>
      <Login />
      {myReviews && myReviews.map((item, i) => (
        <ul key={i}>
            <li>{item.subject}</li>
        </ul>
      ))}
    </MyPageStyled>
  );
};

export default MyPage;
