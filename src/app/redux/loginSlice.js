import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Define a login thunk action to handle the API call
export const login = ({ email, password }) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user:{ email, password }}),
    });
    dispatch(setIsLoading(false));
    if (!response.ok) {
      throw new Error('Login failed');
    }
    dispatch(setLoggedIn(true));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const { setEmail, setPassword, setIsLoading, setError, setLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
