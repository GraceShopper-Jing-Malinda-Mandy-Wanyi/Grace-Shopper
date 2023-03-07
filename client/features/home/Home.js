import React from "react";
import { useSelector } from "react-redux";
import { fetchAllProducts, selectProducts } from "../products/productsSlice";
import {
  fetchRandomProduct,
  selectRandomProduct,
} from "../products/singleProductSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCartItemAsync } from "../cart/cartSlice";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const Home = (props) => {
  const me = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const randomProduct = useSelector(selectRandomProduct);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchRandomProduct());
  }, [dispatch]);

  const addToCart = (event) => {
    const cartItem = {
      qty: 1,
      userId: me.id,
      productId: event.target.value,
    };
    dispatch(addCartItemAsync(cartItem));
  };

  let username = me.username;
  if (me.username) {
    username = me.username.slice(0,1).toUpperCase() + me.username.slice(1);
  }
  return (
    <main id="welcome" className="container">
      <section className="container">
        <div className="flex-column gap-1">
          <h1>Welcome, {username}</h1>
          <p>Find the perfect drink for any occasion</p>
          <Link to="/products?type=allproducts"><button className="btn primary-btn">Shop Now</button></Link>
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
                  <button className="btn primary-btn" value={product.id} onClick={addToCart}>
                    Add to Cart
                  </button>
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
