/* eslint-disable camelcase */

import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </div>
  );
}
export default Rockets;
