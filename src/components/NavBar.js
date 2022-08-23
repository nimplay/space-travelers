import { Link } from 'react-router-dom';
import Planet from '../images/planet.png';

function NavBar() {
  return (
    <div className="header">
      <div className="subheader">
        <img className="header-planet" src={Planet} alt="planet" />
        <h1 className="header-title">Space Travelers&apos; Hub</h1>
      </div>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="nav-link">Rockets</Link>
          </li>
          <li className="nav-li">
            <Link to="/dragons" className="nav-link">Dragons</Link>
          </li>
          <li className="nav-li">
            <Link to="/missions" className="nav-link">Missions</Link>
          </li>
          <li className="nav-li">
            <Link to="/my-profile" className="nav-link">My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
