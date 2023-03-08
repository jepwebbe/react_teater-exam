import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../Components/App/Appservices/AppService";
import CTAButton from "../../Components/Partials/CTAButton";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ActorsDetailsStyled } from "./ActorsDetails.Styled";

const ActorsDetails = () => {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState({});

  // fetch the event from the id in the url using useParams
  // and sets result to state variables
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("actors", id);
        setActorDetails(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  return (
    <PageTwo
      title={`${actorDetails.item?.name} hos Det Utrolige Teater`}
      description={`Her kan du læse mere om Det Utrolige Teaters skuespiller ${actorDetails.item?.name}`}
    >
      <ActorsDetailsStyled>
        <h2>Skuespillere</h2>
        {actorDetails.item ? (
          <div>
            <img
              src={actorDetails.item.image}
              alt={`Et billede af ${actorDetails.item.name}`}
            />
            <div>
              <h3>{actorDetails.item.name.toUpperCase()}</h3>
              <pre>{actorDetails.item.description}</pre>
            </div>
          </div>
        ) : (
          <p>Indlæser</p>
        )}
        <Link to="/skuespillere">
          <CTAButton
            Width="1rem"
            bgColor={(props) => props.theme.colors.secondary}
            btnText="ALLE SKUESPILLERE"
          />
        </Link>
      </ActorsDetailsStyled>
    </PageTwo>
  );
};

export default ActorsDetails;
