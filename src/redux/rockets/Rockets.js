import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsApi = createAsyncThunk(
  'rockets/fetchRocketsApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
    cancel: {
      reducer: (state, action) => state.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: false } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },

  extraReducers: {
    [fetchRocketsApi.fulfilled]: (state, action) => {
      const rockets = action.payload.map((el) => ({
        rocketId: el.rocket_id,
        rocketName: el.rocket_name,
        rocketDesc: el.description,
        rocketImg: el.flickr_images[0],
      }));
      return rockets;
    },
  },
});

export const { reserve, cancel } = rocketsSlice.actions;

export default rocketsSlice.reducer;
