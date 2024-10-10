// src/store/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
// Import axios instance for API calls
import { CounterState } from '../types';

// Initial state for the counter slice
const initialState: CounterState = {
  value: 0,
};

// Define the counter slice with reducers and extraReducers for async logic
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the actions to be used in components
export const { increment, decrement } = counterSlice.actions;
// Export the reducer to be used in the store
export default counterSlice.reducer;
