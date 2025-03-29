import { useState } from 'react';
import FloatingAddButton from './components/FloatingAddButton/FloatingAddButton';
import StudentList from './components/StudentList/StudentList';
import './App.css';

const dummyStudents = [
  {
    _id: '1',
    firstName: 'Emma',
    lastName: 'Johnson',
    grade: 92,
    createdAt: '2025-03-01T12:00:00Z',
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: '2',
    firstName: 'Liam',
    lastName: 'Garcia',
    grade: 85,
    createdAt: '2025-03-02T12:00:00Z',
    isDeleted: true,
    deletedAt: '2025-03-10T10:00:00Z',
  },
  {
    _id: '3',
    firstName: 'Sofia',
    lastName: 'Gomez',
    grade: 95,
    createdAt: '2025-03-03T12:00:00Z',
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: '4',
    firstName: 'Ali',
    lastName: 'Khan',
    grade: 88,
    createdAt: '2025-03-04T12:00:00Z',
    isDeleted: true,
    deletedAt: '2025-03-15T14:00:00Z',
  },
  {
    _id: '5',
    firstName: 'Hiroshi',
    lastName: 'Tanaka',
    grade: 76,
    createdAt: '2025-03-05T12:00:00Z',
    isDeleted: false,
    deletedAt: null,
  }
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
