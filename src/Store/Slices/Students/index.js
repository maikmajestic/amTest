import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: []
  },
  reducers: {
    getCharactersList: (state, action) => {
      state.list = action.payload.filter((char) => char.hogwartsStudent);
    },
    getStudentsList: (state, action) => {
      state.list = action.payload.filter((char) => char.hogwartsStudent);
    },
    getStaffList: (state, action) => {
      action.payload.filter((char) => !char.hogwartsStudent);
    }
  }
});

export const { getCharactersList, getStudentsList, getStaffList } = studentsSlice.actions;

export default studentsSlice.reducer;

export const getCharacters = () => (dispatch) => {
  axios
    .get('//localhost:8000/students')
    .then((response) => dispatch(getCharactersList(response.data)))
    .catch((error) => { console.log(error); });
};