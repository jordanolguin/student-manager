import StudentCard from '../StudentCard/StudentCard';
import styles from './StudentList.module.css';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (!students || students.length === 0) {
    return <p className={styles.noData}>No students found.</p>;
  }

  return (
    <div className={styles.listContainer}>
      {students.map((student) => (
        <StudentCard
          key={student._id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default StudentList;
