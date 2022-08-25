import { configureStore } from '@reduxjs/toolkit';
import Characters from './Slices/Characters';

export const store = configureStore({
  reducer: {
    Characters
  },
});