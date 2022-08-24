import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer, { getMissions } from './missions/Missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// store.dispatch(getMissions());
export default store;
