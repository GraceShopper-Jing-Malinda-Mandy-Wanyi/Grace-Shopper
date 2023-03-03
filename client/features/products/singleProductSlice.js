import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET /api/products/:productId
export const fetchSingleProduct = createAsyncThunk(
  "fetch a single product",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchRandomProduct = createAsyncThunk(
  "fetch random product",
  async () => {
    try {
      const { data } = await axios.get("/api/products/random/random");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomProduct.fulfilled, (state, action) => {
      return action.payload;
    })
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};
export const selectRandomProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;

