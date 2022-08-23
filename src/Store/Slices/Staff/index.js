import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    list: []
  },
  reducers: {
    getStaffList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { getStaffList } = staffSlice.actions;

export default staffSlice.reducer;

export const getStaff = () => (dispatch) => {
  axios
    .get('//localhost:8000/staff')
    .then((response) => dispatch(getStaffList(response.data)))
    .catch((error) => { console.log(error); });
};