import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, setQuery } from "./searchSlice";
import { addCartItemAsync } from "../cart/cartSlice";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.results);
  const [qty, setQty] = useState(1);
  const user = useSelector((state) => state.auth);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchInput));
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    // dispatch(setQuery(input));
  };
  const addToCart = (event) => {
    const cartItem = {
      qty,
      userId: user.me.id,
      productId: event.target.value,
    };
    dispatch(addCartItemAsync(cartItem));
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
              <div>
                <label htmlFor="quantity">
                  <strong>Qty:</strong>
                </label>
                <select
                  onChange={(event) => {
                    setQty(event.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={addToCart} value={result.id}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
