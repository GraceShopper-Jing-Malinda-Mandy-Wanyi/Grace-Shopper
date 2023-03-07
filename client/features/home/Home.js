import React from "react";
import { useSelector } from "react-redux";
import {
    fetchAllProducts,
    selectProducts,
  } from "../products/productsSlice";
  import { fetchRandomProduct, selectRandomProduct} from "../products/singleProductSlice";
  import { useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { addCartItemAsync } from "../cart/cartSlice";

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
  return (
    <div>
          <div>
      <h3>Welcome, {me.username}</h3>

      <div>
        <p>Find the perfect drink for any occasion</p>
        <button>Shop Now</button>
      </div>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <ul>
        {randomProduct && randomProduct.length > 0 ? (
          randomProduct.map((product) => (
            <li key={product.id}>
                <img className="landing-product-images" src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button value={product.id} onClick={addToCart}>Add to Cart</button>
              </li>
          ))
        ) : (
          <h1>Oops, there was an error!</h1>
        )}

        </ul>
      </section>
    </div>

    </div>
  );
};

export default Home;

