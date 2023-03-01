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



export default searchSlice.reducer;
