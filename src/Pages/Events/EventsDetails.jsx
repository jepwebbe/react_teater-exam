import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import { useLoginStore } from "../../Components/Partials/Header/Login/useLoginStore";

const EventsDetails = () => {
  // Destructuring of hooks
  const { loggedIn } = useLoginStore();
  const { id } = useParams();

  // Setting up variables and setter functions for useState
  const [eventDetails, setEventDetails] = useState({});
  console.log("eventdetails", eventDetails)

  // fetch the event from the id in the url using useParams
  // and sets result to state variable
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("events", id);
        setEventDetails(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  return <div>EventsDetails</div>;
};

export default EventsDetails;
