import React, { useState } from "react";
import './styles/SearchBar.css';
import { useCustomerData } from "./hooks/DataProviderContext";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState();
  const { searchCustomer } = useCustomerData();

  const onType = (event) => {
    setSearchTerm(event.target.value);
  }

  const onSearch = () => {
    searchCustomer(searchTerm);
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