import React from "react";
import DateRange from "../../Components/Partials/DateFormatter";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { RandomStyled } from "./Random.Styled";
import { Link } from "react-router-dom";

const Random = () => {
  const { state: random } = useGetApiDataFromEndpoint("events", "items");
  // sort the fetched array randomly and slices out the first 3 elements 
  const randomSlice =
    random.length > 2
      ? random.sort(() => Math.random() - 0.5).slice(0, 3)
      : []; 
      ;

  return (
    <>
      {randomSlice.length > 2 ? (
        <RandomStyled>
            <div>
          {randomSlice.map((item, i) => (
            <article key={i}>
                <div><img src={item.image_medium} alt={`Et billede fra forestillingen ${item.title}`}/></div>
                <div>
                  <p>{item.stage_name.toUpperCase()}</p>
                  <DateRange dateRange={item.startdate + " - " + item.stopdate} />
                  <h2>{item.title}</h2>
                  <p>{item.genre.toUpperCase()}</p>
                  <Link to={`/events/${item.id}`} >
                    <CTAButton width="1rem" bgColor={props => props.theme.colors.tertiary} btnText="LÆS MERE"/>
                  </Link>
                  <Link to={`/events/${item.id}/bestil`}>
                    <CTAButton width="1rem" bgColor={props => props.theme.colors.primary} btnText="KØB BILLET"/>
                  </Link>
                </div>
            </article>
          ))}
          </div>
          <div>
              <Link to="/events">
                <CTAButton width="3rem" btnText="SE ALLE FORESTILLINGER" bgColor={props => props.theme.colors.secondary} />
              </Link>
          </div>
        </RandomStyled>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Random;
