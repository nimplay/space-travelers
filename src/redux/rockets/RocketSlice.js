/** @format */

import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: [],
  reducers: {
    getRockets: (state, action) => [state, action],
    reserveRocket: (state, action) => [state, action],
    cancelReservation: (state, action) => [state, action],
  },
});

export default rocketSlice;
