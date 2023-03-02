// searchSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const searchProducts = createAsyncThunk(
  "search products",
  async (query) => {
    try {
      const { data } = await axios.get(`/api/products/search/search?query=${query}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
      query: "",
      status: "idle",
      results: [],
      error: null,
    },
    reducers: {
      setQuery(state, action) {
        state.query = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(searchProducts.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(searchProducts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.results = action.payload;
        })
        .addCase(searchProducts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export const { setQuery } = searchSlice.actions;
  
  export default searchSlice.reducer;


