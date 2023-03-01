import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct, selectSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const singleProduct = useSelector(selectSingleProduct);
  const {name, img, price, type, size} = singleProduct;

  useEffect(() => {
    console.log(productId);
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);

  return (
      <main>
          <li>
              <h1>{name}</h1>
              <figure>
                <img src={img} alt={`Image of ${name} wine`} />
                <figcaption>Price: ${price}</figcaption>
              </figure>
              <h3>Type: {type}</h3>
              <h3>Size: {size}</h3>
              <button>Add to Cart</button>
            </li>
      </main>
  );
};

export default SingleProduct;
