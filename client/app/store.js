import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import usersSlice from '../features/User/usersSlice';
import singleUserSlice from '../features/User/singleUserSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    users: usersSlice,
    singleUser: singleUserSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
