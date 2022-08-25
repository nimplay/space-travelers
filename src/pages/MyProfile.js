/** @format */
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';
import ProfileItem from '../components/ProfileItem';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  // const missions = useSelector((state) => state.missions);
  // const reservedMissions = rockets.filter((mission) => mission.reserved === true );

  console.log(reservedRockets);

  return (
    <div className={styles.wrapper}>
      <div className={styles.missions}>
        <h1>My Missions</h1>
        <div className={styles.reservedRockets}>
          {reservedRockets.map((reservedRocket) => (
            <ProfileItem key={reservedRocket.id} item={reservedRocket.rocket_name} />
          ))}
        </div>
      </div>

      <div className={styles.rockets}>
        <h1>My Rockets</h1>
        <div className={styles.rerservdMissions}>reserevd missions</div>
      </div>
    </div>
  );
}
export default MyProfile;
