import React from "react";
import { Link } from "react-router-dom";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { HeroStyled } from "./Hero.Styled";

const Hero = () => {
  const { state: hero } = useGetByIdApiDataFromEndpoint("events", 2, "item");
  console.log("events", hero);
  return (
    <HeroStyled>
      <div>
        <div>
          <p>{hero?.stage_name.toUpperCase()}</p>
          <p>
            {hero?.startdate} - {hero.stopdate}
          </p>
        </div>
        <div>
          <h2>{hero?.title}</h2>
          <p>{hero?.genre.toUpperCase()}</p>
        </div>
      </div>
      <div className="imageWrap">
        <Link to={`/events/${hero.id}`}>
          <img
            src={hero.image_medium}
            alt={`Et billede fra forestillingen ${hero.title}`}
          />
        </Link>
      </div>
    </HeroStyled>
  );
};

export default Hero;
