import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserOrders = createAsyncThunk(
  "user's order history",
  async (userId) => {
    try {
      // const token = window.localStorage.getItem("token");
      // if (token) {
      const { data } = await axios.get(`/api/users/${userId}/orders`);
      // , {headers: {authorization: token}}
      return data;
      // }
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchUserOrdersCartItems = createAsyncThunk(
  "user's order cart items",
  async (userId, orderId) => {
    try {
      // const token = window.localStorage.getItem("token");
      // if (token) {
      const { data } = await axios.get(
        `/api/users/${userId}/orders/${orderId}`
        // , {headers: {authorization: token}}
      );
      return data;
      // }
    } catch (err) {
      console.log(err);
    }
  }
);

export const userOrdersSlice = createSlice({
  name: "userOrders",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchUserOrdersCartItems.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const selectUserOrders = (state) => {
  return state.userOrders;
};

export default userOrdersSlice.reducer;
