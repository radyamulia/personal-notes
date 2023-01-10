import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import './SearchBar.css'

function SearchBar(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);

  /**
   * @description - Sets keyword
   * @param {Event} evt
   */
  const onKeywordChangeHandler = (evt) => {
    const { value } = evt.target;
    setKeyword(value);
  };

  /**
   * @description - Filter note-list based on keyword
   * @param {Event} evt
   */
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    props.search(keyword);
  };

  return (
    <form onSubmit={onSubmitHandler} className="search-bar">
      <input
        type="text"
        placeholder="search note by title"
        value={keyword || ""}
        onChange={onKeywordChangeHandler}
        maxLength={20}
        className="search-input"
      />
      <button type="submit" className="btn-submit"><FaSearch /></button>
    </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default SearchBar;
