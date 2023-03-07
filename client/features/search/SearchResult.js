import React from "react";

function SearchResult({ results, qty, addToCart }) {
  return (
    <div>
      {results.map((result) => (
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
                qty(event.target.value);
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
  );
}

export default SearchResult;
