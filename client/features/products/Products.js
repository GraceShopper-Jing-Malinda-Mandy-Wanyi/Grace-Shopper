import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "./productsSlice";

import { addCartItemAsync } from "../cart/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // pulling query object from URL -> {type: "wine"}
  const filteredType = Object.fromEntries([...searchParams]);

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchAllProducts(filteredType));
  }, []);

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
      <main className="container">
        {products && products.length ? (
          products.map((product) => (
            <section className="card-container" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h1>{product.name}</h1>
              </Link>
              <figure className="card">
                <img src={product.img} alt={`Image of ${product.name}`} />
              </figure>

              <div>
                <h3>Price: ${product.price}</h3>
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
                <div>
                  <button
                    className="btn primary-btn"
                    onClick={addToCart}
                    value={product.id}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`}>
                    <button className="btn btn-outlined-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))
        ) : (
          <h1>
            Sorry, all our products are currently sold out. We are working hard
            to get our merchandise back in stock as soon as possible!
          </h1>
        )}
      </main>
    </>
  );
};

export default Products;
