import { useState } from 'react';
import StudentList from './components/StudentList/StudentList';
import './App.css';

const dummyStudents = [
  {
    _id: '1',
    firstName: 'Emma',
    lastName: 'Johnson',
    grade: 92,
  },
  {
    _id: '2',
    firstName: 'Liam',
    lastName: 'Garcia',
    grade: 85,
  },
];

function App() {
  const [students, setStudents] = useState(dummyStudents);

  const handleDelete = (id) => {
    const updateStudents = students.filter((student) => student._id !== id);
    setStudents(updateStudents);
  };

  const handleEdit = (student) => {
    console.log('Editing student:', student);
  };

  return (
    <div className='appContainer'>
      <h1 className='appTitle'>Student Manager</h1>
      <StudentList 
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
