import React from 'react';
import { useSelector } from 'react-redux';
import Join from '../components/Join';
import Badge from '../components/Badge';

function Missions() {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="missions">
      <div className="misions-header">
        <h2>Missions</h2>
        <h2>Descriptions</h2>
        <h2>Status</h2>
      </div>
      <ul className="missions-list">
        {missions.map((mission) => (
          <li className="mission-item" key={mission.mission_id}>
            <h2 className="mission-name">{mission.mission_name}</h2>
            <p className="mission-description">{mission.description}</p>
            <Badge reserved={!!mission.reserved} />
            <Join reserved={!!mission.reserved} id={mission.mission_id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Missions;
