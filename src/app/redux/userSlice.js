import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: null,
    isSuccess: false,
  },
  reducers: {
    createUserRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    createUserSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    createUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetUserState: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isSuccess = false;
    },
  },
});

export const { createUserRequest, createUserSuccess, createUserFailure, resetUserState } = userSlice.actions;

export const createUser = (email, password) => async (dispatch) => {
    
  try {
    dispatch(createUserRequest());
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({user:{ email, password }}),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(createUserSuccess());
    } else {
      dispatch(createUserFailure(data.error));
    }
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

export default userSlice.reducer;
