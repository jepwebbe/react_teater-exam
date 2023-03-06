import React from "react";
import { useSearchResultsStore } from "../Components/Partials/Header/Search/useSearchResultStore";

const SearchResult = () => {
  const { searchResults } = useSearchResultsStore();
  console.log("søge", searchResults)
  return (
    <div>
      {" "}
      {searchResults?.length > 0 ? (
        searchResults.map((item, i) => (
          <article key={i}>
            <h2>{item.title}</h2>
          </article>
        ))
      ) : (
        <p>Din søgning gav ingen resultater</p>
      )}
    </div>
  );
};

export default SearchResult;
