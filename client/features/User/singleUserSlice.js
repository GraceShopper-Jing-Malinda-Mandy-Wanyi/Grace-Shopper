import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleUserAsync = createAsyncThunk(
    'singleUser',
    async(id) => {
        try {
            const {data} = await axios.get(`/api/users/${id}`);
            return data;
        } catch (err){
            console.log(err)
        }
    }
);

export const fetchSingleUserOrders = createAsyncThunk(
  "userOrders",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/orders`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
    "deleteUser",
    async (id) => {
      try {
        const { data } = await axios.delete(`/api/users/${id}`);
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );
  export const editUserAsync = createAsyncThunk(
    "editUser",
    async ({ id, firstName, lastName, email, username, password }) => {
      const { data } = await axios.put(`/api/users/${id}`, {
        id,
        firstName,
        lastName,
        email,
        username,
        password,
      });
      return data;
    }
  );
  
  export const unregisterUserAsync = createAsyncThunk(
    "unregisterUser",
    async (id) => {
        const { data } = await axios.put(`/api/users/${id}/unregister`, {
          // campusId: null,
        });
        console.log(data);
        return data;
    
      }
  );

const singleUserSlice = createSlice({
    name: 'singleUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUserAsync.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
            return {};
          });
          builder.addCase(editUserAsync.fulfilled, (state, action) => {
            return action.payload;
          });
          builder.addCase(unregisterUserAsync.fulfilled, (state, action) => {
            return action.payload;
          });
          builder.addCase(fetchSingleUserOrders.fulfilled, (state, action) => {
            return action.payload;
          });
    },
});

export const selectSingleUser = (state) => {
    return state.singleUserSlice;
};

export default singleUserSlice.reducer