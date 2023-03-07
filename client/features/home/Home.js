import React from "react";
import { useSelector } from "react-redux";
import { fetchAllProducts, selectProducts } from "../products/productsSlice";
import {
  fetchRandomProduct,
  selectRandomProduct,
} from "../products/singleProductSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const randomProduct = useSelector(selectRandomProduct);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchRandomProduct());
  }, [dispatch]);
  return (
    <main id="welcome" className="container">
      <section className="container">
        <div className="flex-column gap-1">
          <h1>Welcome, {username}</h1>
          <p>Find the perfect drink for any occasion</p>
          <button className="btn primary-btn">Shop Now</button>
        </div>
      </section>
      <section>
        <h1>Featured Products</h1>
        <ul className="featured-container">
          {randomProduct && randomProduct.length > 0 ? (
            randomProduct.map((product) => (
              <li className="feeatured-item card card-container" key={product.id}>
                <figure>
                  <img
                    className="landing-product-images"
                    src={product.img}
                    alt={product.name}
                  />
                </figure>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button className="btn primary-btn">Add to Cart</button>
              </li>
            ))
          ) : (
            <h1>Oops, there was an error!</h1>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Home;
