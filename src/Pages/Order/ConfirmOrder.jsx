import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ConfirmOrderStyled } from "./ConfirmOrder.Styled";
import { useOrderStore } from "./useOrderStore";

const ConfirmOrder = () => {
  // destructuring of hooks
  const { id } = useParams();
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  const { state: seats } = useGetByIdApiDataFromEndpoint("seats", id);

  const { OrderInfo, setOrder } = useOrderStore();
  const navigate = useNavigate();

  const submitOrder = () => {
    const buy = async () => {
      try {
        await appService.Create("reservations", {
          event_id: id,
          firstname: OrderInfo.firstname,
          lastname: OrderInfo.lastname,
          address: OrderInfo.address,
          zipcode: OrderInfo.zipcode,
          city: OrderInfo.city,
          seats: OrderInfo.seats,
        });
      } catch (error) {
        console.error(error);
      }
      setOrder({
        event_id: "",
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        email: "",
        seats: [],
      });
      navigate("/tak");
    };
    buy();
  };
  return (
    <PageTwo title="Godkend dit køb">
      <ConfirmOrderStyled>
        {event.item ? (
          <div>
            <div>
              <img
                src={event.item.image}
                alt={`Et billede fra forestillingen ${event.item.title}`}
              />
            </div>
            <div>
              <h2>Godkend ordre</h2>
              <div>
                <h3>PRODUKTER:</h3>
                <p>
                  <span className="details">FORESTILLING</span>:{" "}
                  {event.item.title}
                </p>
                <p>
                  <span className="details">SCENE</span>:{" "}
                  {event.item.stage_name}
                </p>
                <p>
                  <span className="details">DATO</span>:
                </p>
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
                  {OrderInfo?.seats?.map((seat, i) => {
                    const matchingSeat = seats?.items?.find(
                      (item) => item.id === seat
                    );
                    return (
                      <tr key={i}>
                        <td>{matchingSeat ? matchingSeat.number : ""}</td>
                        <td>{matchingSeat ? matchingSeat.line : ""}</td>
                        <td>{event.item.price} DKK</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>PRIS I ALT</td>
                    <td></td>
                    <td>{event.item.price * OrderInfo.seats.length}.00 DKK</td>
                  </tr>
                </tbody>
              </table>
              <p>PRIS INKL. MOMS & BILLETGEBYR</p>
              <div>
                <h4>KUNDE:</h4>
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
                  <p>
                    EMAIL:{" "}
                    <a
                      href={`mailto:${OrderInfo.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {OrderInfo.email.toUpperCase()}
                    </a>
                  </p>
                </div>
                <p>BILLETTERNE SENDES ELEKTRONISK TIL DIN EMAIL</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Indlæser</p>
        )}
        <div>
          
            <Link to={`/events/${id}/bestil`}> 
              <CTAButton
                width="1rem"
                bgColor={(props) => props.theme.colors.secondary}
                btnText="TILBAGE"
              />
            </Link>
          
          <div onClick={submitOrder}>
            <CTAButton
              width="1rem"
              bgColor={(props) => props.theme.colors.secondary}
              btnText="GODKEND BESTILLING"
            />
          </div>
        </div>
      </ConfirmOrderStyled>
    </PageTwo>
  );
};

export default ConfirmOrder;
