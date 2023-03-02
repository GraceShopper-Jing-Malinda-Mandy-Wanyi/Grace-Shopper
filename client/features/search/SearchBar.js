import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, setQuery } from "./searchSlice";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchInput));
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    dispatch(setQuery(input));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults && searchResults.length > 0 ? (
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <h3>{result.name}</h3>
              <p>{result.type}</p>
              <figure>
                <img src={result.img} />
                <figcaption>Price: ${result.price}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
