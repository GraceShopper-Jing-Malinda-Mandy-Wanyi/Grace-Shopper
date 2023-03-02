import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCartItemAsync = createAsyncThunk(
  "addCartItem",
  async (cartItem) => {
    try {
      await axios.post(`/api/cart`, cartItem);
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAllCartItemsAsync = createAsyncThunk(
  "fetchCartItems",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/cart/${userId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCartItemsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const cartItems = (state) => {
  return state.cartItems;
};

export default cartSlice.reducer;
