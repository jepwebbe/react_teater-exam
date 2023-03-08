import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ConfirmOrderStyled } from "./ConfirmOrder.Styled";
import { useOrderStore } from "./useOrderStore";

const ConfirmOrder = ({ history }) => {
  const { id } = useParams();
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  const {state: bookings } = useGetApiDataFromEndpoint("reservations")
  const { OrderInfo } = useOrderStore();
  console.log("orderinfo", OrderInfo);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const submitOrder = () => {
    const buy = async () => {
      try {
        await appService.Create("reservations", { OrderInfo });
      } catch (error) {
        console.error(error);
      }
    };
    buy();
    console.log("bookings", bookings)

  };


  return (
    <PageTwo title="Godkend dit køb">
      <ConfirmOrderStyled>
        {event.item ? (
          <div>
            <div>
              <img src={event.item.image} />
            </div>
            <div>
              <h2>Godkend ordre</h2>
              <div>
                <h3>PRODUKTER:</h3>
                <p>FORESTILLING: {event.item.title}</p>
                <p>SCENE: {event.item.stage_name}</p>
                <p>DATO:</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SÆDE</th>
                    <th>RÆKKE</th>
                    <th>PRIS</th>
                  </tr>
                </thead>
                <tbody>
                  {OrderInfo.seats.map((seat, i) => (
                    <tr key={i}>
                      <td>{seat.id}</td>
                      <td>{seat.line}</td>
                      <td>{event.item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>PRIS INKL. MOMS & BILLETGEBYR</p>
              <div>
                <h3>KUNDE</h3>
                <div>
                  <p>
                    {OrderInfo.firstname.toUpperCase()}{" "}
                    {OrderInfo.lastname.toUpperCase()}
                  </p>
                  <p>{OrderInfo.address.toUpperCase()}</p>
                  <p>
                    {OrderInfo.zipcode.toUpperCase()}{" "}
                    {OrderInfo.city.toUpperCase()}
                  </p>
                  <p>EMAIL {OrderInfo.email.toUpperCase()}</p>
                </div>
                <p>BILLETTERNE SENDES ELEKTRONISK TIL DIN EMAIL</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Indlæser</p>
        )}
        <CTAButton
          width="1rem"
          bgColor={(props) => props.theme.colors.secondary}
          btnText="TILBAGE"
          onClick={goBack}
        />
        
          <div onClick={() => submitOrder()}  >
              <CTAButton
                width="1rem"
                bgColor={(props) => props.theme.colors.secondary}
                btnText="GODKEND BESTILLING"
                        />
          </div>
      </ConfirmOrderStyled>
    </PageTwo>
  );
};

export default ConfirmOrder;
