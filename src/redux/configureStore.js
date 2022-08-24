import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer, { getMissions } from './missions/Missions';
import rocketReducer, { actionSetRockets } from './rockets/RocketReducer';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(getMissions());
store.dispatch(actionSetRockets());
export default store;
