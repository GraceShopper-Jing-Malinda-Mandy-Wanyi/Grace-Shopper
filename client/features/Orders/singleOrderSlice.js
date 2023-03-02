import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleOrderAsync= createAsyncThunk(
  "singleOrder",
  async (id) => {
    try {
      //need to update line 10 with the correct route
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleOrderSlice = createSlice({
  name: "singleOrder",
  initialState: [],
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
