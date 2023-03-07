import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  deleteProduct,
  addProduct,
} from "../products/productsSlice";

const Inventory = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const addNewProduct = (event) => {
    event.preventDefault();
    const query = {
      name: event.target.name.value,
      productType: event.target.type.value,
      description: event.target.description.value,
      price: event.target.price.value,
      size: event.target.size.value,
    };

    dispatch(addProduct(query));
  };

  return (
    <div id="inventoryContainer">
      <div id="allProducts">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
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
                  <td>{product.size}</td>
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
      <div id="addProduct">
        <form onSubmit={addNewProduct}>
          <label>Name</label>
          <input name="name"></input>
          <label>Type</label>
          <input name="type"></input>
          <label>Size</label>
          <input name="size"></input>
          <label>Description</label>
          <input name="description"></input>
          <label>Price</label>
          <input name="price"></input>
          <button>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
