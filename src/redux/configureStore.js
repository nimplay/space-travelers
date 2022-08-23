import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer, { getMissions } from './missions/Missions';
import rocketsSlice from './rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(getMissions());

export default store;
