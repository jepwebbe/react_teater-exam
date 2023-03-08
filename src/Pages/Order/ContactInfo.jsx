import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactInfoStyled } from "./ContactInfo.Styled";
import { useOrderStore } from "./useOrderStore";

const ContactInfo = ({eventid }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    event_id: eventid,
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipcode: "",
    city: "",
  });
  const { setOrder } = useOrderStore()
  // Updates the state whenever anything is written in the input field
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
        // [name]: type === "checkbox" ? checked : value
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    setOrder(formData)
    navigate(`/events/${eventid}/godkend`)
}

  return (
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
      </div>
      <input className="submit" type="submit" value="Send" />
    </ContactInfoStyled>
  );
};

export default ContactInfo;
