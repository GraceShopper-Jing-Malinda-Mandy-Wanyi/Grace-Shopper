import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allUsersSlice from "../features/AllUsers/allUsersSlice";
import singleUserSlice from "../features/User/singleUserSlice";
import productsSlice from "../features/products/productsSlice";
import singleProductSlice from "../features/products/singleProductSlice";
import allOrdersSlice from "../features/Orders/allOrdersSlice";
import singleOrderSlice from "../features/Orders/singleOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allusers: allUsersSlice,
    singleUser: singleUserSlice,
    products: productsSlice,
    allOrders: allOrdersSlice,
    singleOrder: singleOrderSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
