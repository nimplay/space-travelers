/** @format */

const RESERVE_ROCKET = 'space-traveller-hub/rockets/RESERVE_ROCKET';
const SET_ROCKETS = 'space-traveller-hub/rockets/SET_ROCKET';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return newState;
    }
    case SET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

const actionReserve = (id) => ({ type: RESERVE_ROCKET, payload: id });

const actionSetRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const rockets = await response.json();
  dispatch({ type: SET_ROCKETS, payload: rockets });
};

export default rocketReducer;
export { actionReserve, actionSetRockets };
