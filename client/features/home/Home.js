import React from "react";
import { useSelector } from "react-redux";
import {
    fetchAllProducts,
    selectProducts,
  } from "../products/productsSlice";
  import { fetchRandomProduct, selectRandomProduct} from "../products/singleProductSlice";
  import { useDispatch } from "react-redux";
  import { useEffect } from "react";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const randomProduct = useSelector(selectRandomProduct)

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchRandomProduct());

  }, [dispatch]);
  return (
    <div>
          <div>
      <h3>Welcome, {username}</h3>

      <div>
        <p>Find the perfect drink for any occasion</p>
        <button>Shop Now</button>
      </div>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <ul>
          <li key={randomProduct.id}>
            <img src={randomProduct.img} alt={randomProduct.name} />
            <h3>{randomProduct.name}</h3>
            <p>${randomProduct.price}</p>
            <button>Add to Cart</button>
          </li>
        </ul>
      </section>
    </div>

    </div>
  );
};

export default Home;
