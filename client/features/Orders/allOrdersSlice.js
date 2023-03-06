import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchAllOrdersAsync = createAsyncThunk("allorders", async () => {
  try {
    //need to update line 10 with the correct route
    // const { data } = await axios.get("/api/orders");
    const { data } = await axios.get("/api/:userId/orders");
    return data;
  } catch (err) {
    console.log(err);
  }
});

const allOrdersSlice = createSlice({
  name: "allOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllOrders = (state) => {
  return state.allOrders;

};

export default allOrdersSlice.reducer;
