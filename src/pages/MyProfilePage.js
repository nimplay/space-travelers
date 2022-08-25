/** @format */
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.css';
import ProfileItem from '../components/ProfileItem';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.missions}>
        <h1>My Missions</h1>
        <div className={styles.reservedRockets}>
          {reservedRockets.map((reservedRocket) => (
            <ProfileItem
              key={reservedRocket.id}
              item={reservedRocket.rocket_name}
            />
          ))}
        </div>
      </div>

      <div className={styles.rockets}>
        <h1>My Rockets</h1>
        <div className={styles.reservedMissions}>
          {reservedMissions.map((reservedMission) => (
            <ProfileItem key={reservedMission.id} item={reservedMission.mission_name} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
