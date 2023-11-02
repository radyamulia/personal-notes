import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../../contexts";

import './SearchBar.css'

function SearchBar({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);

  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder={locale === 'id' ? 'cari catatan berdasarkan judul' : 'search note by title'}
        value={keyword || ""}
        onChange={(evt) => keywordChange(evt.target.value)}
        maxLength={20}
        className='search-input'
      />
    </form>
  );
}

SearchBar.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default SearchBar;
