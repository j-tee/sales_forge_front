import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';
import messageReducer from './messageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    message: messageReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
