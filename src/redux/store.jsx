import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the reducer, NOT the slice object

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use cartSlice.reducer instead of cartSlice
  },
});

export default store;
