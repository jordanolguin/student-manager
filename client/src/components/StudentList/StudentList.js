import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import StudentCard from '../StudentCard/StudentCard';
import styles from './StudentList.module.css';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (!students || students.length === 0) {
    return <p className={styles.noData}>No students found.</p>;
  }

  return (
    <div className={styles.listContainer}>
      <AnimatePresence>
        {students.map((student) => (
          <motion.div
            key={student._id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <StudentCard
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StudentList;
