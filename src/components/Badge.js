import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => {
  const { reserved } = props;
  if (reserved) {
    return (
      <span className="membership active">Active Member</span>
    );
  }
  return (
    <span className="membership">NOT A MEMBER</span>
  );
};

Badge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

export default Badge;
