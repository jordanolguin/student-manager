import { useState } from 'react';
import FloatingAddButton from './components/FloatingAddButton/FloatingAddButton';
import StudentList from './components/StudentList/StudentList';
import StudentForm from './components/StudentForm/StudentForm';
import useFetchStudents from './hooks/useFetchStudents';
import useCreateStudent from './hooks/useCreateStudent';
import useDeleteStudent from './hooks/useDeleteStudent';
import useUpdateStudent from './hooks/useUpdateStudent';
import './App.css';

function App() {
  const { students, loading, error, setStudents } = useFetchStudents();
  const { addStudent } = useCreateStudent();
  const { removeStudent } = useDeleteStudent();
  const { modifyStudent } = useUpdateStudent();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  const handleAddOrEditStudent = async (student) => {
    if (studentToEdit) {
      const updatedStudent = await modifyStudent(student._id, student);
      if (updatedStudent) {
        setStudents((prevStudents) =>
          prevStudents.map((s) => (s._id === updatedStudent._id ? updatedStudent : s))
        );
      }
    } else {
      const newStudent = await addStudent(student);
      if (newStudent) {
        setStudents((prevStudents) => [newStudent, ...prevStudents]);
      }
    }
    closeModal();
  };

  const openModal = () => {
    setIsFormOpen(true);
    setStudentToEdit(false);
  }
  const closeModal = () => setIsFormOpen(false);

  const handleDelete = async (id) => {
    const deletedStudent = await removeStudent(id);
    if (deletedStudent) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === id
            ? { ...student, isDeleted: true, deletedAt: deletedStudent.deletedAt }
            : student
        )
      );
      console.log(
        `✅ Student ${deletedStudent.firstName} ${deletedStudent.lastName} was successfully deleted.`
      );
    } else {
      console.error('Error deleting student:', deletedStudent);
    }
  };

  const handleEdit = (student) => {
    console.log('Editing student:', student);
    setIsFormOpen(true);
    setStudentToEdit(student);
  };

  if (loading) {
    return <p className='appTitle'>Loading students...</p>
  }

  if (error) {
    return <p className='appTitle error'>Error fetching students: {error}</p>
  }

  return (
    <div>
      <h1 className='appTitle'>Student Manager</h1>
      <StudentList 
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <FloatingAddButton onAdd={openModal} />
      {isFormOpen && (
        <StudentForm
          initialValues={studentToEdit || { firstName: '', lastName: '', grade: '' }}
          onSubmit={handleAddOrEditStudent}
          onCancel={closeModal}
          isEditMode={!!studentToEdit}
        />
      )}
    </div>
  );
}

export default App;
