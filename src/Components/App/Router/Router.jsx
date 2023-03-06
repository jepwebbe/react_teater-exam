import React from "react";
import { Route, Routes } from "react-router-dom";
import { Actors } from "../../../Pages/Actors/Actors";
import ActorsDetails from "../../../Pages/Actors/ActorsDetails";
import { Events } from "../../../Pages/Events/Events";
import EventsDetails from "../../../Pages/Events/EventsDetails";
import Home from "../../../Pages/Home/Home";
import { NotFound } from "../../../Pages/NotFound";
// Defines the routes via the react-router-dom routing
const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventsDetails />} />
      <Route path="/skuespillere" element={<Actors />} />
      <Route path="/skuespillere/:id" element={<ActorsDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
