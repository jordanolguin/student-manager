import { FaUserPlus } from 'react-icons/fa';
import styles from './FloatingAddButton.module.css';

const FloatingAddButton = ({ onAdd }) => {
  return (
    <button className={styles.addButton} onClick={onAdd}>
      <FaUserPlus className={styles.icon} />
    </button>
  );
};

export default FloatingAddButton;
