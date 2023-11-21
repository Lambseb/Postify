import PropTypes from "prop-types";
import "./searchBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SearchBar({ setQuery }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setQuery(inputValue);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        onChange={handleInputChange}
        className="input-search"
        placeholder="Type to Search..."
      />
      <NavLink to="/results" className="nav-search" onClick={handleSearch}>
        Search
      </NavLink>
    </div>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
