import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  deleteProduct,
  addProduct,
  editProduct,
} from "../products/productsSlice";

const Inventory = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormValue] = useState({});

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

  const onClickHandler = (queryObj) => {
    if (queryObj.method === "Edit") {
      setFormValue(queryObj);
      setEditMode(true);
    } else {
      queryObj = formValue;
      delete queryObj.method;
      dispatch(editProduct(queryObj));
      setEditMode(false);
    }
  };

  const changeHandler = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  //redux values are read only, so if we want to alter its values for the
  //purpose sorting, we have to copy it into a new array
  const actualProducts = [...products];

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
            {actualProducts.length < 0
              ? ""
              : actualProducts
                  .sort((a, b) => a.id - b.id)
                  .map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>
                        {editMode && formValue.id === product.id ? (
                          <input
                            onChange={changeHandler}
                            name="name"
                            value={formValue.name}
                          />
                        ) : (
                          product.name
                        )}
                      </td>
                      <td>
                        {editMode && formValue.id === product.id ? (
                          <input
                            onChange={changeHandler}
                            name="productType"
                            value={formValue.productType}
                          />
                        ) : (
                          product.productType
                        )}
                      </td>
                      <td>
                        {editMode && formValue.id === product.id ? (
                          <input
                            onChange={changeHandler}
                            name="size"
                            value={formValue.size}
                          />
                        ) : (
                          product.size
                        )}
                      </td>
                      <td>
                        {editMode && formValue.id === product.id ? (
                          <input
                            onChange={changeHandler}
                            name="description"
                            value={formValue.description}
                          />
                        ) : (
                          product.description
                        )}
                      </td>
                      <td>
                        {editMode && formValue.id === product.id ? (
                          <input
                            onChange={changeHandler}
                            name="price"
                            value={formValue.price}
                          />
                        ) : (
                          product.price
                        )}
                      </td>
                      <td>
                        <button
                          onClick={(event) => {
                            onClickHandler({
                              method: event.target.value,
                              id: product.id,
                              name: product.name,
                              productType: product.productType,
                              size: product.size,
                              description: product.description,
                              price: product.price,
                            });
                          }}
                          value={!editMode ? "Edit" : "Save Changes"}
                        >
                          {!editMode ? "Edit" : "Save Changes"}
                        </button>
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
