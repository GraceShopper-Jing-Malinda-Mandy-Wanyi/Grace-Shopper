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

export const searchSlice = createSlice({
  name: "searchProduct",
  initialState: {
    query: "",
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },

});



export default searchSlice.reducer;
