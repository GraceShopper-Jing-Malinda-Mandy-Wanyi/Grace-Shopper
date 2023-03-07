import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET /api/products
export const fetchAllProducts = createAsyncThunk(
  "fetch all products",
  async (filteredType) => {
    try {
      let path = "";
      if (filteredType) {
        path = `?type=${filteredType.type}`;
      }
      const { data } = await axios.get(`/api/products${path}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// POST /api/products
export const addProduct = createAsyncThunk("add product", async (newProduct) => {
  try {
    const { data } = await axios.post("/api/products", newProduct );
    return data;
  } catch (err) {
    console.log(err);
  }
});

// PUT /api/products
export const editProduct = createAsyncThunk("edit product", async (editProduct) => {
  try {
    const { data } = await axios.put(`/api/products/${editProduct.id}`, editProduct);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// DELETE /api/products
export const deleteProduct = createAsyncThunk("delete product", async (id) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        return action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        return state.map(product => {
          if(product.id === action.payload.id){
            return action.payload
          } else {
            return product
          }
        }); 
        newState = newState.sort((a,b) => {a.id > b.id ? 1 :
                                                b.id > a.id ? -1 : 0})
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product.id !== action.payload.id)
      });
      
  },
});

export const selectProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;
