// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import slice reducer
import counterReducer from './counterSlice';

// Create the Redux store and configure the reducer(s)
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define RootState type for use with TypeScript to get the state type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for use with TypeScript to get the dispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
