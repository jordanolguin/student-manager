import styles from './StudentCard.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>
        {student.firstName} {student.lastName}
      </h3>
      <p className={styles.grade}>Grade: {student.grade}%</p>
      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => onEdit(student)}>
          <FaEdit className={styles.icon} /> Edit
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(student._id)}>
          <FaTrash className={styles.icon} /> Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
