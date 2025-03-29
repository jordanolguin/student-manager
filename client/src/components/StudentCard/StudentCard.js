import styles from './StudentCard.module.css';
import { FaEdit, FaTrash, FaUserGraduate, FaClock } from 'react-icons/fa';
import { formatDate } from '../../utils/formatDate';

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
        <p className={styles.createdAt}>
          <FaClock className={styles.clockIcon} /> Created At:{' '}
          {formatDate(student.createdAt)}
        </p>
        {student.isDeleted && (
          <p className={styles.deleted}>
            <strong>❗️ Deleted:</strong> {formatDate(student.deletedAt)}
          </p>
        )}
      </div>
      <div className={styles.actions}>
        {!student.isDeleted && (
          <>
            <button className={styles.editBtn} onClick={() => onEdit(student)}>
              <FaEdit className={styles.icon} /> Edit
            </button>
            <button className={styles.deleteBtn} onClick={() => onDelete(student._id)}>
              <FaTrash className={styles.icon} /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
