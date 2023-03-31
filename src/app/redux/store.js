import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import userReducer from './userSlice';
import loginReducer from './loginSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    auth: authReducer,
  },
});
