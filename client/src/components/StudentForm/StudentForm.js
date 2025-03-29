import { useState } from 'react';
import styles from './StudentForm.module.css';

const StudentForm = ({ initialValues, onSubmit, onCancel, isEditMode }) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'grade' ? parseInt(value, 10) || '' : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.grade >= 0 && formData.grade <= 100) {
          onSubmit(formData);
        }
      };

    return (
        <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>
          {isEditMode ? 'Edit Student' : 'Add New Student'}
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="grade">Grade (%)</label>
            <input
              type="number"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              min="0"
              max="100"
              required
            />
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.submitBtn}>
              {isEditMode ? 'Update' : 'Add Student'}
            </button>
            <button type="button" onClick={onCancel} className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default StudentForm;