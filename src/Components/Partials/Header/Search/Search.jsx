import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useSearchResultsStore } from "./useSearchResultStore";

const Search = () => {
  // state to hold the searchterm and a destructuring of the zustand search component
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchResults } = useSearchResultsStore()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.mediehuset.net/detutroligeteater/events/search/${searchTerm}`
      );
      const results = await response.json();
      setSearchResults(results.items);
      console.log("søge", results.items)
    } catch (error) {
      console.error(error);
    }
    navigate("/search")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Indtast søgeord"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <GrSearch />
      </button>
    </form>
  );
};

export default Search;
