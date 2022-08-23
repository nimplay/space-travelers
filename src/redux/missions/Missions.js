import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissionsFromAPI from '../../utils/FetchMissionsFromAPI';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const initialState = [];

const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    const response = await fetchMissionsFromAPI();
    return response;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    join: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: true } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
    leave: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: false } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => (action.payload));
  },
});

const { join, leave } = missionsSlice.actions;

export { getMissions, join, leave };
export default missionsSlice.reducer;
