/** @format */
// import { useDispatch } from "react-redux";

const GET_ROCKETS = 'spacetraveller/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spacetraveller/rockets/RESERVER_ROCKETS';
const CANCEL_RESERVATION = 'spacetraveller/rockets/CANCEL_RESERVATION';

const getRockets = () => ({ type: GET_ROCKETS, payload: null });

const reserveRocket = (id) => ({ type: RESERVE_ROCKETS, payload: id });

const cancelReservation = (id) => ({ type: CANCEL_RESERVATION, payload: id });

const rocketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ROCKETS:
      return [];
    case RESERVE_ROCKETS:
      return [];
    case CANCEL_RESERVATION:
      return [];
    default:
      return state;
  }
};

const actionGetRocket = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());
  console.log(response);
  dispatch(getRockets());
};

const actionReserveRocket = (id) => ({ type: RESERVE_ROCKETS, payload: id });

const actionCancelRervation = (id) => ({ type: CANCEL_RESERVATION, payload: id });

export {
  getRockets,
  reserveRocket,
  cancelReservation,
  rocketReducer,
  actionGetRocket,
  actionReserveRocket,
  actionCancelRervation,
};
