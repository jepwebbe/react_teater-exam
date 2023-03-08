import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { PageTwo } from "../../Styles/PageTemplate/PageTwo";
import { ActorsStyled } from "./Actors.Styled";
export const Actors = () => {
  const { state: actors } = useGetApiDataFromEndpoint(
    "actors?orderby=name&dir=asc",
    "items"
  );
  return (
    <PageTwo
      title="Skuespillere hos Det Utrolige Teater"
      description="Her kan du se alle de skønne skuespillere, som vi samarbejder med hos Det Utrolige Teater"
    >
      <ActorsStyled>
        <h2>Skuespillere</h2>
        {actors.length > 0 ? (
          actors.map((actor, i) => (
            <li key={i}>
              <img src={actor.image} alt={`Et billede af ${actor.name}`} />
              <div>
                <h3>{actor.name.toUpperCase()}</h3>
                <pre>{actor.description.slice(0, 500)} ...</pre>
              </div>
              <Link to={actor.id}>
                <CTAButton
                  Width="1rem"
                  bgColor={(props) => props.theme.colors.tertiary}
                  btnText="LÆS MERE"
                />
              </Link>
            </li>
          ))
        ) : (
          <p>Indlæser</p>
        )}
      </ActorsStyled>
    </PageTwo>
  );
};
