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




  // first is she needs to not fucking render her products in the navbar
  // second she only needs ONE event listener for onSubmit -> inside of the event listner, she needs to put ONE NAVIGATE to a link /products?search={searchValue}
  //inside of products component, she needs to get req query, then dispatch req query (this is going to happen in the use effect)
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
    <>
      <form className="flex-row gap-1" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="btn primary-btn" type="submit">Search</button>
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
                <button className="btn primary-btn" onClick={addToCart} value={result.id}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default SearchBar;
