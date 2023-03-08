import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ChooseOrderStyled } from "./ChooseOrder.Styled";
import ContactInfo from "./ContactInfo";
import { ContactInfoStyled } from "./ContactInfo.Styled";
import { useOrderStore } from "./useOrderStore";

const ChooseOrder = () => {
  const { id } = useParams();
  const { state: seats } = useGetByIdApiDataFromEndpoint("seats", id);
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  const { setOrder, OrderInfo } = useOrderStore();
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    event_id: event.item?.id,
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipcode: "",
    city: "",
    seats: [],
  });
  // Updates the state whenever anything is written in the input field
  const [isValid, setIsValid] = useState(true);

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

  // Contactform
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (name == "email") {
      if (!emailRegex.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };
  const handleSubmit = () => {
    if (!isValid) {
      setFormErrors({
        message: 'Indtast venligst en gyldig email',
      })
      return;
    }
    const { firstname, lastname, email, address, zipcode, city } = formData;
    if (!firstname || !lastname || !email || !address || !zipcode || !city) {
      setFormErrors({
        message: 'Udfyld venligst alle felter',
      });
      return;
    }
    setOrder(formData);
    navigate(`/events/${event.item.id}/godkend`);
  };
  return (
    <PageTwo title={`Køb billet til ${event.item?.title}`}>
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
                <ContactInfoStyled onSubmit={handleSubmit}>
                  <div>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      placeholder="Fornavn"
                      maxLength="80"
                      required
                    />

                    <input
                      onChange={handleChange}
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      placeholder="Efternavn"
                      maxLength="80"
                      required
                    />{" "}
                    <input
                      onChange={handleChange}
                      type="text"
                      name="address"
                      value={formData.address}
                      placeholder="Vejnavn & nr"
                      required
                    />
                    <div className="address">
                      <input
                        onChange={handleChange}
                        type="number"
                        name="zipcode"
                        value={formData.zipcode}
                        placeholder="Postnummer"
                        required
                      />
                      <input
                        onChange={handleChange}
                        type="text"
                        name="city"
                        value={formData.city}
                        placeholder="By"
                        required
                      />
                    </div>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Emailadresse"
                      required
                    />
                    {formErrors && <p>{formErrors.message}</p>}
                  </div>
                </ContactInfoStyled>
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
            <div onClick={handleSubmit}>
              <CTAButton
                width="1rem"
                bgColor={(props) => props.theme.colors.secondary}
                btnText="GODKEND BESTILLING"
              />
            </div>
          </>
        ) : (
          <p>Indlæser</p>
        )}
      </ChooseOrderStyled>
    </PageTwo>
  );
};

export default ChooseOrder;
