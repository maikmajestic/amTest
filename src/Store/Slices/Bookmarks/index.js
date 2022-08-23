import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    list: []
  },
  reducers: {
    setBookmarkList: (state, action) => {
      state.list = action.payload.filter((char) => char.bookmarked);
    }
  }
});

export const { setBookmarkList } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;

export const getBookmarks = () => (dispatch) => {
  axios
    .get('//localhost:8000/students')
    .then((response) => dispatch(setBookmarkList(response.data)))
    .catch((error) => { console.log(error); });
};