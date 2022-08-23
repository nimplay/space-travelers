import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { join, leave } from '../redux/missions/Missions';

const Join = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(join(id));
  };

  const handleLeave = () => {
    dispatch(leave(id));
  };

  if (reserved) {
    return (
      <button type="button" className="leave-btn" onClick={handleLeave}>Leave Mission</button>
    );
  }
  return (
    <button type="button" className="join-btn" onClick={handleJoin}>Join Mission</button>
  );
};

Join.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Join;
