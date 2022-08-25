import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const charactersSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    students: [],
    staff: [],
    bookmarks: [],
    typeS: ''
  },
  reducers: {
    setCharactersList: (state, action) => {
      state.list = action.payload.filter((char) => char.hogwartsStudent);
      state.students = action.payload.filter((char) => char.hogwartsStudent);
      state.staff = action.payload.filter((char) => char.hogwartsStaff);
      state.bookmarks = action.payload.filter((char) => char.bookmarked);
    },
    getType: (state, action) => {
      state.typeS = action.payload;
    },
  }
});

export const { setCharactersList, getStudentsList, getStaffList, getBookmarkList, getType } = charactersSlice.actions;

export default charactersSlice.reducer;

export const getCharacters = () => (dispatch) => {
  axios
    .get('//localhost:8000/characters')
    .then((response) => dispatch(setCharactersList(response.data)))
    .catch((error) => { console.log(error); });
};