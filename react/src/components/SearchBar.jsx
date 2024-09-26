import React, { useState } from "react";
import './styles/SearchBar.css';

const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState();

  const onType = (event) => {
    setSearchTerm(event.target.value);
  }

  const onSearch = () => {
    props.doSearch(searchTerm);
  }

  return (
    <div className="search-bar-container">
      <input type="text" name="search-bar" id="search-bar"
        placeholder="Search for customer name" onChange={onType} />
      <button className="search-button" onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchBar;