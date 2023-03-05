import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { addCartItemAsync } from "../cart/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const { name, img, price, productType, size } = useSelector(selectSingleProduct);
  console.log(name, img, price, productType, size)

  const user = useSelector((state) => state.auth);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  const addToCart = (event) => {
    const cartItem = {
      qty,
      userId: user.me.id,
      productId: event.target.value,
    };
    dispatch(addCartItemAsync(cartItem));
  };

  return (
    <main>
      <section>
        <h1>{name}</h1>
        <figure>
          <img src={img} alt={`Image of ${name} wine`} />
          <figcaption>Price: ${price}</figcaption>
        </figure>
        <h3>Type: {productType}</h3>
        <h3>Size: {size}</h3>
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
          <button onClick={addToCart} value={productId}>
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;
