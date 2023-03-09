import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ChooseOrderStyled } from "./ChooseOrder.Styled";
import { ContactInfoStyled } from "./ContactInfo.Styled";
import { useOrderStore } from "./useOrderStore";

const ChooseOrder = () => {
  const { id } = useParams();
  const { state: seats } = useGetByIdApiDataFromEndpoint("seats", id);
  const { state: event } = useGetByIdApiDataFromEndpoint("events", id);
  const { setOrder, OrderInfo } = useOrderStore();
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  // Updates the state whenever anything is written in the input field
  const [formData, setFormData] = useState({
    event_id: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipcode: "",
    city: "",
    seats: [],
  });
  const [isValid, setIsValid] = useState(true);

  // Update the formData with the id from the fetched event
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      event_id: event.item?.id,
    }));
    if (formData.event_id === OrderInfo.event_id) {
      setFormData(OrderInfo);
    }
  }, [event]);

  // function to handle the seat choice
  const handleSeatClick = (event, seat) => {
    event.currentTarget.classList.toggle("bookedNow");
    // Check to see if the seat is already in the formData
    const index = formData.seats.indexOf(seat);
    if (index === -1) {
      // If it is not, add it
      setFormData({
        ...formData,
        seats: [...formData.seats, seat],
      });
    } else {
      // If it is, remove it, creating new array and removing by id
      setFormData({
        ...formData,
        seats: formData.seats.filter((id) => id !== seat),
      });
    }
    console.log("formData", formData);
  };

  // Contactform function that sets the formData on a change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    // Regex chekcs if the email is valid or not acc. to pattern
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (name == "email") {
      if (!emailRegex.test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  };

  // The submit function checks if email is valid, throws error if not
  // Else checks that required is not empty
  // finally sets the zustand from the formData and redirects
  const handleSubmit = () => {
    if (!isValid) {
      setFormErrors({
        message: "Indtast venligst en gyldig email",
      });
      return;
    }
    const { firstname, lastname, email, address, zipcode, city } = formData;
    if (!firstname || !lastname || !email || !address || !zipcode || !city) {
      setFormErrors({
        message: "Udfyld venligst alle felter",
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
              <div className="imageCard">
                <div>
                  <img
                    src={event.item.image}
                    alt={`Et billede fra forestillingen ${event.item.title}`}
                  />
                </div>
                <div>
                  <h2>Køb billet</h2>
                  <div>
                    <h3>{event.item.title.toUpperCase()}</h3>
                    <p>
                      {event.item.stage_name.toUpperCase()}{" "}
                      {event.item.startdate} KL.
                      {event.item.starttime}
                    </p>
                  </div>
                  <ContactInfoStyled onSubmit={handleSubmit}>
                    <div>
                      <div>
                        <label htmlFor="firstname">FORNAVN</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          placeholder="Fornavn"
                          maxLength="80"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname">EFTERNAVN</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="lastname"
                          value={formData.lastname}
                          placeholder="Efternavn"
                          maxLength="80"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="adress">VEJNAVN & NR</label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="address"
                          value={formData.address}
                          placeholder="Vejnavn & nr"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="zipcode">POSTNR & BY</label>
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
                      <div>
                        <label htmlFor="email">EMAIL</label>
                        <input
                          onChange={handleChange}
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Emailadresse"
                          required
                        />
                      </div>
                      {formErrors && <p>{formErrors.message}</p>}
                    </div>
                  </ContactInfoStyled>
                  <p>ALLE FELTER SKAL UDFYLDES</p>
                  <div>
                    <p>
                      ANTAL <span>-</span>
                      <span>{formData.seats.length}</span>
                      <span>+</span>
                    </p>
                    <div>
                      <p>PRIS {formData.seats.length * event.item.price} DKK</p>
                      <p>PRIS INKL. MOMS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="stage">{event.item.stage_name.toUpperCase()}</p>
                <div className="venue">
                  {seats.items ? (
                    seats.items.map((seat, i) => (
                      <React.Fragment key={i}>
                        {seat.is_reserved == 0 ? (
                          <span
                            className={`free ${
                              seat.line === "1"
                                ? "row-one"
                                : seat.line === "2"
                                ? "row-two"
                                : seat.line === "3"
                                ? "row-three"
                                : seat.line === "4"
                                ? "row-four"
                                : seat.line === "5"
                                ? "row-five"
                                : seat.line === "6"
                                ? "row-six"
                                : seat.line === "7"
                                ? "row-seven"
                                : seat.line === "8"
                                ? "row-eight"
                                : seat.line === "9"
                                ? "row-nine"
                                : seat.line === "10"
                                ? "row-ten"
                                : ""
                            }`}
                            onClick={(event) => handleSeatClick(event, seat.id)}
                          ></span>
                        ) : (
                          <span
                            className={`booked ${
                              seat.line === "1"
                                ? "row-one"
                                : seat.line === "2"
                                ? "row-two"
                                : seat.line === "3"
                                ? "row-three"
                                : seat.line === "4"
                                ? "row-four"
                                : seat.line === "5"
                                ? "row-five"
                                : seat.line === "6"
                                ? "row-six"
                                : seat.line === "7"
                                ? "row-seven"
                                : seat.line === "8"
                                ? "row-eight"
                                : seat.line === "9"
                                ? "row-nine"
                                : seat.line === "10"
                                ? "row-ten"
                                : ""
                            }`}
                          ></span>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <p>Indlæser</p>
                  )}
                </div>
                <p className="choose-text">VÆLG SIDDEPLADSER</p>

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
