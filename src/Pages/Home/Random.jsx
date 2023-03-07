import React from "react";
import DateRange from "../../Components/Partials/DateFormatter";
import CTAButton from "../../Components/Partials/CTAButton";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { RandomStyled } from "./Random.Styled";

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
                <p>{item.stage_name.toUpperCase()}</p>
                <DateRange dateRange={item.startdate + " - " + item.stopdate} />
                <h2>{item.title}</h2>
                <p>{item.genre.toUpperCase()}</p>
                <CTAButton href={`/events/${item.id}`} width="1rem" bgColor={props => props.theme.colors.tertiary} btnText="LÆS MERE"/>
                <CTAButton href="/" width="1rem" bgColor={props => props.theme.colors.primary} btnText="KØB BILLET"/>
            </article>
          ))}
          </div>
          <div>
              <CTAButton href="/events" width="3rem" btnText="SE ALLE FORESTILLINGER" bgColor={props => props.theme.colors.secondary} />
          </div>
        </RandomStyled>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Random;
