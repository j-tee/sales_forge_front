import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

export const setMessage = createAsyncThunk(
  "message/SET_MESSAGE",
  async (payload, thunkAPI) => {
    return payload;
  }
);

export const clearMessage = createAsyncThunk(
  "message/CLEAR_MESSAGE",
  async (_, thunkAPI) => {
    return "";
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: { message: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setMessage.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(clearMessage.fulfilled, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default messageSlice.reducer;
