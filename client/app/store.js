import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import usersSlice from '../features/User/usersSlice';
import singleUserSlice from '../features/User/singleUserSlice';
import productsSlice from '../features/products/productsSlice';
import searchSlice from '../features/search/searchSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersSlice,
    singleUser: singleUserSlice,
    products: productsSlice,
    searchProducts: searchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
