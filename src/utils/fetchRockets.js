/** @format */

import { ROCKETS_URL } from './ApiData';

const fetchRockets = async () => {
  const response = await fetch(ROCKETS_URL);
  const missions = await response.json();
  return missions;
};

export default fetchRockets;
