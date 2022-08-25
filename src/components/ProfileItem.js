/** @format */
import PropTypes from 'prop-types';
import styles from './ProfileItem.module.css';

const ProfileItem = (props) => {
  const { item } = props;

  return <div className={styles.item}>{item}</div>;
};

ProfileItem.defaultProps = {
  item: '',
};

ProfileItem.propTypes = {
  item: PropTypes.string,
};

export default ProfileItem;
