import { MISSIONS_URL } from './ApiData';

const fetchMissionsFromAPI = async () => {
  const response = await fetch(MISSIONS_URL);
  const missions = await response.json();
  return missions;
};

export default fetchMissionsFromAPI;
