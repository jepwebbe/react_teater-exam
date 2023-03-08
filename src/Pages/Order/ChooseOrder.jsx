import React from "react";
import { useParams } from "react-router-dom";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ChooseOrderStyled } from "./ChooseOrder.Styled";
import ContactInfo from "./ContactInfo";

const ChooseOrder = () => {
  const { id } = useParams();
  const { state: seats } = useGetByIdApiDataFromEndpoint("seats", id);
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  console.log("seats", seats);
  console.log("event", event);
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
                <ContactInfo eventid={event.item.id}/>
              </div>
              <div>
                <p>{event.item.stage_name}</p>
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
