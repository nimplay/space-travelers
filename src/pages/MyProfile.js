/** @format */
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  return (
    <div className={styles.wrapper}>
      <div className={styles.missions}>
        <h1>My Missions</h1>
        <div className={styles.reservedRockets}>reserved rockets</div>
      </div>

      <div className={styles.rockets}>
        <h1>My Rockets</h1>
        <div className={styles.rerservdMissions}>reserevd missions</div>
      </div>
    </div>
  );
}
export default MyProfile;
