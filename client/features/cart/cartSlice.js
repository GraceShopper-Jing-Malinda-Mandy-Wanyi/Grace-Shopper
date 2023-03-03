import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCartItemAsync = createAsyncThunk(
  "addCartItem",
  async (cartItem) => {
    try {
      if (!cartItem.userId) {
        const { data } = await axios.get(`/api/products/${cartItem.productId}`);
        data.qty = cartItem.qty
        return data;
      } else {
        await axios.post(`/api/cart`, cartItem);
      }
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
      return action.payload.map(cartItem => ({id: cartItem.id, qty: cartItem.qty, ...cartItem.product}));
    });
    builder.addCase(addCartItemAsync.fulfilled,
      (state, action) => {
        const guestCart = JSON.parse(window.localStorage.getItem("cart"));
        guestCart.push(action.payload);
        window.localStorage.setItem("cart", JSON.stringify(guestCart));
      })
  },
});

export const cartItems = (state) => {
  return state.cartItems;
};

export default cartSlice.reducer;
