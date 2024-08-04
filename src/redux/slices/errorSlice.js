import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title:''
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (action,state) => {
      state.title = action.payload
      return state
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export const selectErrorMessage = (state) => state.error.title;
export default errorSlice.reducer;
