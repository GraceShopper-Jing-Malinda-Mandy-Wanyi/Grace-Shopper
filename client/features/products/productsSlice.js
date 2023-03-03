import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET /api/products
export const fetchAllProducts = createAsyncThunk(
  "fetch all products",
  async () => {
    try {
      const { data } = await axios.get("/api/products");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// GET /api/products/type/:productType
export const fetchProductType = createAsyncThunk(
  "fetch product type",
  async (type) => {
    try {
      const { data } = await axios.get(`/api/products/type/${type}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// POST /api/products
export const addProduct = createAsyncThunk("add product", async () => {
  try {
    const { data } = await axios.post("/api/products");
    return data;
  } catch (err) {
    console.log(err);
  }
});

// DELETE /api/products
export const deleteProduct = createAsyncThunk("delete product", async (id) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchProductType.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return [];
      });
  },
});

export const selectProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;
