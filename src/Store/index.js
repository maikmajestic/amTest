import { configureStore } from '@reduxjs/toolkit';
import Bookmarks from  './Slices/Bookmarks';
import Students from './Slices/Students';
import Staff from './Slices/Staff';

export const store = configureStore({
  reducer: {
    Bookmarks,
    Students,
    Staff
  },
});