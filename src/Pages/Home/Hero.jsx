import React from "react";
import { Link } from "react-router-dom";
import DateRange from "../../Components/Partials/DateFormatter";
import useGetByIdApiDataFromEndpoint from "../../Hooks/useGetByIdApiDataFromEndpoint";
import { HeroStyled } from "./Hero.Styled";

const Hero = () => {
  const { state: hero } = useGetByIdApiDataFromEndpoint("events", 1);

  if (hero.item) {
    const dateRange = hero.item.startdate + " - " + hero.item.stopdate;
    return (
      <HeroStyled>
        <div>
          <div>
            <p>{hero.item?.stage_name?.toUpperCase()}</p>
            <DateRange dateRange={dateRange} />
          </div>
          <div>
            <h2>{hero.item?.title}</h2>
            <p>{hero.item?.genre.toUpperCase()}</p>
          </div>
        </div>
        <div className="imageWrap">
          <Link to={`/events/${hero.item.id}`}>
            <img
              src={hero.item?.image_medium}
              alt={`Et billede fra forestillingen ${hero.item?.title}`}
            />
          </Link>
        </div>
      </HeroStyled>
    );
  }
};

export default Hero;
