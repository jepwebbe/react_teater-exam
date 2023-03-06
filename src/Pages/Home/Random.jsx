import React from "react";
import useGetApiDataFromEndpoint from "../../Hooks/useGetApiDataFromEndpoint";
import { RandomStyled } from "./Random.Styled";

const Random = () => {
  const { state: random } = useGetApiDataFromEndpoint("events", "items");
  console.log(random);

  return (
    <>
      {random.length > 2 ? (
        <RandomStyled>
          {random.slice(3).map((item, i) => (
            <article key={i}>
                <h2>{item.title}</h2>
            </article>
          ))}
        </RandomStyled>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Random;
