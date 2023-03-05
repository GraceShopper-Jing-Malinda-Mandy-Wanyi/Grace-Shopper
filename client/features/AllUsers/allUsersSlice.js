import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAllUsersAsync = createAsyncThunk("allusers", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const updateSingleUserAsync = createAsyncThunk(
  "update user",
  async ({ id, userType }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, { userType });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateSingleUserAsync.fulfilled, (state, action) => {
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        } else {
          return action.payload;
        }
      });
    });
  },
});

export const selectUsers = (state) => {
  return state.allUsers;
};

export default usersSlice.reducer;
