import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './pages/RocketsPage';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Dragons from './pages/Dragons';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
