import React from "react";
import './styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" name="search-bar" id="search-bar"
        placeholder="Search for customer name" />
      <button className="search-button">Search</button>
    </div>
  )
}

export default SearchBar;