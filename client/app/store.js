import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allUsersSlice from "../features/AllUsers/allUsersSlice";
import singleUserSlice from "../features/User/singleUserSlice";
import userOrdersSlice from "../features/User/orders/userOrdersSlice";
import productsSlice from "../features/products/productsSlice";
import singleProductSlice from "../features/products/singleProductSlice";
import allOrdersSlice from "../features/Orders/allOrdersSlice";
import singleOrderSlice from "../features/Orders/singleOrderSlice";
import cartSlice from "../features/cart/cartSlice";
import searchSlice from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allUsers: allUsersSlice,
    singleUser: singleUserSlice,
    userOrders: userOrdersSlice,
    products: productsSlice,
    singleProduct: singleProductSlice,
    allOrders: allOrdersSlice,
    singleOrder: singleOrderSlice,
    cartItems: cartSlice,
    search: searchSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
