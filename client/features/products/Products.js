import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectProducts,
  fetchAllProducts,
  deleteProduct,
} from "./productsSlice";

const Products = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <main>
        {products && products.length ? (
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h1>{product.name}</h1>
              </Link>
              <figure>
                <img src={product.img} alt={`Image of ${product.name} wine`} />
                <figcaption>Price: ${product.price}</figcaption>
              </figure>
              <div>
                <label htmlFor="quantity">
                  <strong>Qty:</strong>
                </label>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button>Add to Cart</button>
              </div>
            </li>
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
