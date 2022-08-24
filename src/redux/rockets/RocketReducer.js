/** @format */

const RESERVE_ROCKET = 'space-traveller-hub/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space-traveller-hub/rockets/CANCEL_RESERVATION';
const SET_ROCKETS = 'space-traveller-hub/rockets/SET_ROCKET';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
      return [action.payload];
    case CANCEL_RESERVATION:
      return [action.payload];
    case SET_ROCKETS:
      return [];
    default:
      return state;
  }
};

const actionReserve = (id) => ({ type: RESERVE_ROCKET, payload: id });

const actionCancel = (id) => ({ type: CANCEL_RESERVATION, payload: id });

const actionSetRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const rockets = await response.json();
  console.log(rockets);
  dispatch({ type: SET_ROCKETS, payload: rockets });
};

export default rocketReducer;
export { actionCancel, actionReserve, actionSetRockets };
