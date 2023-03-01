import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import usersSlice from '../features/User/usersSlice';
import singleUserSlice from '../features/User/singleUserSlice';
import productsSlice from '../features/products/productsSlice';
import singleOrderSlice from '../features/Orders/singleOrderSlice';
import allOrders from "../features/Orders/AllOrders";
import allOrdersSlice from '../features/Orders/allOrdersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersSlice,
    singleUser: singleUserSlice,
    products: productsSlice,
    singleOrder: singleOrderSlice,
    allOrders: allOrdersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
