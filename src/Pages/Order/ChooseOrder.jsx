import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ChooseOrderStyled } from "./ChooseOrder.Styled";
import ContactInfo from "./ContactInfo";
import { useOrderStore } from "./useOrderStore";

const ChooseOrder = () => {
  const { id } = useParams();
  const { state: seats } = useGetByIdApiDataFromEndpoint("seats", id);
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  const { setOrder, OrderInfo } = useOrderStore();
  console.log("orderinfoseats", OrderInfo.seats);
  const handleSeatClick = (event, seat) => {
    event.currentTarget.classList.toggle("bookedNow");
    // Check to se if the seat is already in the OrderInfo
    const index = OrderInfo.seats.indexOf(seat);
    if (index === -1) {
      // If it is not, add it
      setOrder({
        ...OrderInfo,
        seats: [...OrderInfo.seats, seat],
      });
    } else {
      // If it is, remove it, creating new array and removing by id
      setOrder({
        ...OrderInfo,
        seats: OrderInfo.seats.filter((id) => id !== seat),
      });
    }
  };

  return (
    <PageTwo>
      <ChooseOrderStyled>
        {event.item ? (
          <>
            <div>
              <div>
                <img
                  src={event.item.image}
                  alt={`Et billede fra forestillingen ${event.item.title}`}
                />
              </div>
              <div>
                <h2>Køb billet</h2>
                <div>
                  <p>{event.item.title}</p>
                  <p>
                    {event.item.stage_name} {event.item.startdate}
                    {event.item.starttime}
                  </p>
                </div>
                <ContactInfo eventid={event.item.id} />
              </div>
              <div>
                <p>{event.item.stage_name}</p>
                <div>
                  {seats.items ? (
                    seats.items.map((seat, i) => (
                      <React.Fragment key={i}>
                        {seat.is_reserved == 0 ? (
                          <span
                            className="free"
                            onClick={(event) => handleSeatClick(event, seat.id)}
                          ></span>
                        ) : (
                          <span className="booked"></span>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <p>Indlæser</p>
                  )}
                </div>
              </div>
            </div>
            <CTAButton
              width="1rem"
              bgColor={(props) => props.theme.colors.secondary}
              btnText="GODKEND BESTILLING"
            />
          </>
        ) : (
          <p>Indlæser</p>
        )}
      </ChooseOrderStyled>
    </PageTwo>
  );
};

export default ChooseOrder;
