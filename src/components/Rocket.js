/** @format */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Rocket.module.css';
import { actionReserve } from '../redux/rockets/RocketReducer';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, desc, flickr, reserved,
  } = props;

  console.log(reserved);

  const reserveHandle = (id) => {
    dispatch(actionReserve(id));
  };

  const cancelReservationHandle = (id) => {
    console.log(`Cancel: ${id} is ${reserved}`);
  };

  return (
    <div className={styles.rocket}>
      <div className={styles.frame}>
        <img src={flickr} alt="space rocket" className={styles.image} />
      </div>
      <div className={styles.infor}>
        <div className="rocket-description">
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            { reserved ? (<span className={styles.reserved}>Reserved</span>) : null}
            {desc}
          </p>
        </div>
        <div className={styles.btn}>
          {reserved ? (
            <button type="button" onClick={() => cancelReservationHandle(id)}>
              Cancel Reservation
            </button>
          ) : (
            <button type="button" onClick={() => reserveHandle(id)}>
              Reserve Rocket
            </button>
          )}
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
  reserved: false,
};

Rocket.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  flickr: PropTypes.string,
  id: PropTypes.number,
  reserved: PropTypes.bool,
};
export default Rocket;
