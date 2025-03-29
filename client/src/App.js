import FloatingAddButton from './components/FloatingAddButton/FloatingAddButton';
import StudentList from './components/StudentList/StudentList';
import useFetchStudents from './hooks/useFetchStudents';
import './App.css';

function App() {
  const { students, loading, error, setStudents } = useFetchStudents();

  const handleDelete = (id) => {
    const updateStudents = students.filter((student) => student._id !== id);
    setStudents(updateStudents);
  };

  const handleEdit = (student) => {
    console.log('Editing student:', student);
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
      <FloatingAddButton onAdd={() => console.log('Add new student')} />
    </div>
  );
}

export default App;
