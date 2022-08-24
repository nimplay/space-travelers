/**
 * /*
 *   eslint-disable camelcase
 *
 * @format
 */

import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  const mappedRockets = rockets.map((rocket) => {
    const {
      id,
      // eslint-disable-next-line camelcase
      rocket_name,
      description,
      // eslint-disable-next-line camelcase
      flickr_images,
    } = rocket;
    return {
      id,
      rocket_name,
      description,
      flickr_images,
    };
  });

  return (
    <div>
      {mappedRockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          title={rocket.name}
          desc={rocket.description}
          flickr={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
}
export default Rockets;
