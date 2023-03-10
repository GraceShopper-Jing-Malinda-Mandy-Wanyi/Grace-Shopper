import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAllOrdersAsync = createAsyncThunk(
  "allorders",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/orders`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAllOrdersAdminAsync = createAsyncThunk(
  "all orders as admin",
  async () => {
    try {
      const { data } = await axios.get("/api/orders/admin/allorders", {
        headers: { authorization: window.localStorage.getItem("token") },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const allOrdersSlice = createSlice({
  name: "allOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAllOrdersAdminAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllOrders = (state) => {
  return state.allOrders;
};

export default allOrdersSlice.reducer;
