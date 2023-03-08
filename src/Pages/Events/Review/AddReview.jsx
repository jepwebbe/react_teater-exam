import React, { useState } from "react";
import { useForm } from "react-hook-form";
import appService from "../../../Components/App/Appservices/AppService";
import { useLoginStore } from "../../../Components/Partials/Login/useLoginStore";
import { StyledAddReview } from "./AddReview.Styled";
import { BsCardText } from "react-icons/bs";

const AddReview = ({ eventId, setReviewSent }) => {
  const { userInfo } = useLoginStore();
  const [reviewSent, setLocalReviewSent] = useState(false);

  // Destructure form methods from useForm
  const {
    register, // register input with validation
    handleSubmit, // handle the form submit
    reset,
    formState: { errors }, // form errors
  } = useForm();

  // Submits the data from the form to the properties required by the api
  const onSubmit = async (data) => {
    const postData = {
      subject: data.title,
      comment: data.comment,
      user_id: data.user_id,
      num_stars: data.stars,
      event_id: eventId,
      active: true,
    };
    try {
      const response = await appService.Create("reviews", postData);
      if (response.status) {
        reset();
        setLocalReviewSent(true);
        setReviewSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledAddReview onSubmit={handleSubmit(onSubmit)}>
        <div>
          <BsCardText />
          <h4>Skriv en anmeldelse</h4>
        </div>
        {!reviewSent ? (
            <>
              <input
                type="hidden"
                {...register("user_id", { value: "" })}
                value={userInfo?.user_id ?? ""}
              />
              {errors.title?.type === "required" && (
                <p>Dette felt skal udfyldes</p>
              )}
              <input
                className="stars"
                type="number"
                min="1"
                max="5"
                placeholder="Giv en rating mellem 1 og 5"
                {...register("stars", { required: true })}
              />
              <input
                className="title"
                type="text"
                placeholder="Emne"
                {...register("title", { required: true })}
              />

              <div>
                <textarea
                  className="comment"
                  {...register("comment", { required: true })}
                  id="comment"
                  placeholder="Kommentar"
                  rows="2"
                ></textarea>
                <input className="submit" type="submit" value="Send" />
              </div>
            </>
          ) : (
            <div className="user-message">
              <h4>Tak for din anmeldelse</h4>
            </div>
          )
        }
      </StyledAddReview>
    </>
  );
};

export default AddReview;
