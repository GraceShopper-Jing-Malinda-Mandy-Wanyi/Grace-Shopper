import React from "react";

function SearchResult({ results, qty, addToCart }) {
  return (
    <main className="container">
      {results.map((result) => (
        <section key={result.id}>
          <h3>{result.name}</h3>
          <p>{result.type}</p>
          <figure className="card">
            <img src={result.img} alt={`Image of ${result.name}`} />
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
        </section>
      ))}
    </main>
  );
}

export default SearchResult;
