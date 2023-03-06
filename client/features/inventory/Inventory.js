import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts, deleteProduct } from "../products/productsSlice";

const Inventory = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div id="allProducts">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.productType}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
