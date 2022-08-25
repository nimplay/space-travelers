/*eslint-disable */


import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Rocket.module.css';
import { actionReserve } from '../redux/rockets/RocketReducer';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;

  // const [res, setReserved] = useState([id, title, desc, flickr, reserved]);

  // const reserveHandle = (id) => {
  //   // setReserved(!res[4]);
  //   dispatch(actionReserve(id));
  // };

  // const cancelReservationHandle = (id) => {
  //   console.log(`Cancel: ${id} is ${reserved}`);
  // };

  return (
    <div className={styles.rocket}>
      <div className={styles.frame}>
        <img src={rocket.flickr_images[0]} alt="space rocket" className={styles.image} />
      </div>
      <div className={styles.infor}>
        <div className="rocket-description">
          <h1 className={styles.title}>{rocket.rocket_name}</h1>
          <p className={styles.description}>
            {rocket.reserved ? (
              <span className={styles.reserved}>Reserved</span>
            ) : null}
            {rocket.description}
          </p>
        </div>
        <div className={styles.btn}>
          <button
            type="button"
            onClick={() => dispatch(actionReserve(rocket.id))}>
            {rocket.reserved ? 'Cancel Reservation' : `reserve ${rocket.rocket_name}`}
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
