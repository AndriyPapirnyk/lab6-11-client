import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartState } from './types';
import type { Car } from '../context/CarsContext';

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Car>) => {
      const existingItem = state.items.find(
        item => item.car._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          car: action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        item => item.car._id !== action.payload
      );
    },

    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(
        item => item.car._id === action.payload.id
      );

      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(
            item => item.car._id !== action.payload.id
          );
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
