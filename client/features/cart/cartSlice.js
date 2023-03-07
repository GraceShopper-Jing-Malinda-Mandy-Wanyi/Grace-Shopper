import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCartItemAsync = createAsyncThunk(
  "addCartItem",
  async (cartItem, thunkAPI) => {
    console.log("path0000000", cartItem)
    try {
      if (!cartItem.userId) {
        console.log("path11111111")
        const { data } = await axios.get(`/api/products/${cartItem.productId}`);
        data.qty = cartItem.qty;
        data.type = "guest"
        console.log("only guest info should be here")
        return data;
      } else {
        console.log("path22222")
        const { data } = await axios.post(`/api/cart`, cartItem);
  
        console.log("ABOVE RIGHT PATH")
        if(cartItem.guestCart){
          console.log("only guest to user", cartItem.userId)
          thunkAPI.dispatch(fetchAllCartItemsAsync(cartItem.userId))
        }
      
        if(data){
          console.log("only user info should be here")
          return data
        } 
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

export const updateQtyAsync = createAsyncThunk("updateQty", async ({cartItemId, qty}) => {
  try {
    const {data} = await axios.put(`/api/cart/${cartItemId}`, {qty})

    return data
  } catch (err) {
    console.log(err);
  }
});

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCartItemsAsync.fulfilled, (state, action) => {
      return action.payload.map((cartItem) => {
        cartItem.product.cartItemId = cartItem.id;
        cartItem.product.qty = cartItem.qty;
        return cartItem.product;
      });
    });
    builder.addCase(addCartItemAsync.fulfilled, (state, action) => {
      console.log(action.payload, "THIS IS ACTION PAYLOAD")

      if(!action.payload){
        return state
      }
      if(action.payload.type){
      delete action.payload.type
      let guestCart = JSON.parse(window.localStorage.getItem("cart"));

      let updated = false
      guestCart = guestCart.map((product) => {
        if(product.id === action.payload.id){
          updated = true
          product.qty = Number(product.qty) + Number(action.payload.qty)
          return product
        } else {
          return product
        }
      })

      if(!updated && action.payload){
        guestCart.push(action.payload)
      }

      console.log("THUNK", guestCart, updated);
      window.localStorage.setItem("cart", JSON.stringify(guestCart));
    } else {
      const newProduct = action.payload.product
      newProduct.cartItemId = action.payload.id
      newProduct.qty = action.payload.qty
      let updated = false
      const newState = state.map((product) => {
        if(product.cartItemId === action.payload.id){
          updated = true
          return newProduct
        } else {
          return product
        }
      })

      if(updated){
        return newState
      } else {
        state.push(newProduct)
      }
      
    }
    });
    builder.addCase(updateQtyAsync.fulfilled, (state, action) => {
      action.payload.product.cartItemId = action.payload.id
      action.payload.product.qty = Number(action.payload.qty)
      return state.map((cartItem) => {
        if(cartItem.cartItemId === action.payload.id){
          return action.payload.product
        } else {
          return cartItem
        }
      });
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
