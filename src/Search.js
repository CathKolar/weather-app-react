import React from "react";
import "./Search.css";
import Locate from "./Locate";
export default function Search() {
  return (
    <div className="Search">
      <form id="search-city">
        <input
          type="text"
          placeholder="Search City"
          autoFocus="on"
          autoComplete="off"
          className="city-input"
          id="city-input"
        />
        <input
          type="submit"
          value="🔎"
          className="search-button"
          id="search-button"
        />
      </form>
      <Locate />
    </div>
  );
}
