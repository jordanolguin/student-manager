import styles from './StudentCard.module.css';
import { FaEdit, FaTrash, FaUserGraduate } from 'react-icons/fa';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <FaUserGraduate className={styles.studentIcon} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>
          {student.firstName} {student.lastName}
        </h3>
        <p className={styles.grade}>Grade: {student.grade}%</p>
      </div>
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
