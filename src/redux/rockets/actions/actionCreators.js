/** @format */

const GET_ROCKETS = 'spacetraveller/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spacetraveller/rockets/RESERVER_ROCKETS';
const CANCEL_RESERVATION = 'spacetraveller/rockets/CANCEL_RESERVATION';

const getRockets = () => ({ type: GET_ROCKETS });

const reserveRocket = (id) => ({ type: RESERVE_ROCKETS, payload: id });

const cancelReservation = (id) => ({ type: CANCEL_RESERVATION, payload: id });

export { getRockets, reserveRocket, cancelReservation };
