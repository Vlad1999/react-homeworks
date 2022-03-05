import "./SearchBox.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBox({ handleSearch, handleChange, search, searchInfo }) {
  return (
    <>
      <header>
        <h1>Open Library</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Which book you are looking for?"
            value={search}
            onChange={handleChange}
          />
          <button className="btn-submit" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        {searchInfo.numFound > 0 ? (
          <p>Search Results: {searchInfo.numFound}</p>
        ) : (
          ""
        )}
      </header>
    </>
  );
}

export default SearchBox;
