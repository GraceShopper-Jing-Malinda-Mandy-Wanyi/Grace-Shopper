import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCartItemAsync = createAsyncThunk(
  "addCartItem",
  async (cartItem) => {
    try {
      if (!cartItem.userId) {
        const { data } = await axios.get(`/api/products/${cartItem.productId}`);
        data.qty = cartItem.qty;
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

export const deleteCartItemAsync = createAsyncThunk(
  "deleteCartItem",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/cart/${id}`);
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
      console.log(action.payload);
      return action.payload.map((cartItem) => {
        cartItem.product.cartItemId = cartItem.id;
        cartItem.product.qty = cartItem.qty;
        return cartItem.product;
      });
    });
    builder.addCase(addCartItemAsync.fulfilled, (state, action) => {
      const guestCart = JSON.parse(window.localStorage.getItem("cart"));
      guestCart.push(action.payload);
      console.log("THUNK", guestCart);
      window.localStorage.setItem("cart", JSON.stringify(guestCart));
    });
    builder.addCase(deleteCartItemAsync.fulfilled, (state, action) => {
      console.log(typeof action.payload);
      return state.filter((cartItem) => cartItem.cartItemId !== action.payload);
    });
  },
});

export const cartItems = (state) => {
  return state.cartItems;
};

export default cartSlice.reducer;
