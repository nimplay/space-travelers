/** @format */

import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

const Rocket = (props) => {
  const {
    id, title, desc, flickr,
  } = props;

  // console.log(`id: ${id}`);

  const reserveHandle = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.rocket}>
      <div className={styles.frame}>
        <img src={flickr} alt="space rocket" className={styles.image} />
      </div>
      <div className={styles.infor}>
        <div className="rocket-description">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div>
          <button type="button" onClick={() => reserveHandle(id)}>
            Reserve Rocket
          </button>
        </div>
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  title: '',
  desc: '',
  flickr: '',
  id: 0,
};

Rocket.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  flickr: PropTypes.string,
  id: PropTypes.number,
};
export default Rocket;
