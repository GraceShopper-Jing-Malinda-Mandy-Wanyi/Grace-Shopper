import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addCartItemAsync } from "../cart/cartSlice";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/
export const me = createAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });

      const guestCart = JSON.parse(window.localStorage.getItem("cart"));
      console.log("INSIDE AUTH", guestCart)
      if (res.data && guestCart.length > 0 && !guestCart.includes(null) && !guestCart.includes(undefined)) {
        console.log(guestCart)
        thunkAPI.dispatch(addCartItemAsync({ userId: res.data.id, guestCart }));
        window.localStorage.removeItem("cart");
      }

      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (
    { username, password, email, firstName, lastName, method },
    thunkAPI
  ) => {
    try {
      if (method === "signup") {
        const res = await axios.post(`/auth/${method}`, {
          username,
          password,
          email,
          firstName,
          lastName,
        });
        window.localStorage.setItem(TOKEN, res.data.token);
        thunkAPI.dispatch(me());
      }

      if (method === "login") {
        const res = await axios.post(`/auth/${method}`, { username, password });
        window.localStorage.setItem(TOKEN, res.data.token);
        thunkAPI.dispatch(me());
      }
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

/*
  SLICE
*/
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: {},
    error: null,
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
