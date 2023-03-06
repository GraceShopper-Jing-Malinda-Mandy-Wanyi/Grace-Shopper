import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleOrderAsync= createAsyncThunk(
  "singleOrder",
  async (userId, orderId) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/orders/${orderId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleOrderSlice = createSlice({
  name: "singleOrder",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleOrderAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleOrder = (state) => {
  return state.singleOrderSlice;
};

export default singleOrderSlice.reducer;
