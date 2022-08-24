/* eslint-disable camelcase */

import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  const mappedRockets = rockets.map((rocket) => {
    const {
      id,
      rocket_name,
      description,
      flickr_images,
    } = rocket;

    return {
      id,
      rocket_name,
      description,
      flickr_images,
      reserved: false,
    };
  });

  return (
    <div>
      {mappedRockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          title={rocket.rocket_name}
          desc={rocket.description}
          flickr={rocket.flickr_images[0]}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}
export default Rockets;
