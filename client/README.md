## Student Manager - Client Side (Frontend)

Welcome to the **Student Manager** client-side codebase. This project is a **React-based application** designed to manage student data efficiently, including the ability to create, update, soft delete, and view student records. The client-side communicates with a Node.js/Express backend and uses MongoDB as the database.

---

## File Structure

```
client/
├── public/                  # Static public assets
├── src/                     # Main source directory
│   ├── api/                 # API functions for CRUD operations
│   │   ├── api.js           # API methods using axios
│   │   └── config.js        # Backend API base URL
│   ├── components/          # Reusable components
│   │   ├── FloatingAddButton/
│   │   ├── StudentCard/
│   │   ├── StudentForm/
│   │   └── StudentList/
│   ├── hooks/               # Custom hooks for API interactions
│   │   ├── useCreateStudent.js
│   │   ├── useDeleteStudent.js
│   │   └── useFetchStudents.js
│   ├── utils/               # Utility functions
│   │   └── formatDate.js
│   ├── App.css              # Global CSS styles
│   ├── App.js               # Main App component
│   ├── index.js             # React entry point
│   └── .gitignore           # Ignore generated files and dependencies
├── package.json             # Project dependencies and scripts
└── README.md                # Documentation
```

---

## Key Features

**Add New Student:** Add a new student using a modal form that appears with a smooth animation.  
**Edit Student (Placeholder for Interview):** Placeholder for the edit functionality, to be implemented during the interview.  
**Soft Delete Student:** Soft delete a student, marking them as deleted and showing the timestamp.  
**View Student List:** View all active and soft-deleted student records.  
**API Communication:** Custom hooks (`useFetchStudents`, `useCreateStudent`, `useDeleteStudent`) to handle CRUD operations.  

---

## Setup and Installation

1. **Clone the Repository:**
```bash
git clone https://github.com/jordanolguin/student-manager.git
```

2. **Navigate to Client Directory:**
```bash
cd student-manager/client
```

3. **Install Dependencies:**
```bash
npm install
```

4. **Start the Development Server:**
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Environment Configuration

Ensure that the backend is running on port `3001` or update the `API_URL` in:
```
src/api/config.js
```
```javascript
const API_URL = 'http://localhost:3001/students';
export default API_URL;
```

---

## Core Components and Hooks

### 1. **App.js**
- Main entry point for the app.
- Displays the student list and manages the modal for adding new students.

### 2. **StudentCard**
- Displays individual student data, including soft delete status.
- Allows edit and delete functionality.

### 3. **StudentForm**
- Modal form used for adding or editing student data.
- Includes animation using **Framer Motion**.

### 4. **FloatingAddButton**
- Floating action button with a plus icon to trigger adding a new student.

---

## Custom Hooks

### 1. **useFetchStudents.js**
- Fetches student data from the backend.
- Handles loading and error states.

### 2. **useCreateStudent.js**
- Adds a new student to the backend.
- Updates the UI upon success.

### 3. **useDeleteStudent.js**
- Soft deletes a student and updates the UI.
- Displays error messages when an error occurs.

---

## CSS Styling and Animations

- Each component has its own **CSS module** to maintain scoped styles.
- **Framer Motion** is used for smooth modal animations and component transitions.

---

## API Integration

All API requests are handled in:
```
src/api/api.js
```
### API Methods:
- `getStudents()`
- `createStudent(student)`
- `updateStudent(id, student)` (Future Implementation)
- `deleteStudent(id)`

---

## Usage Instructions

### 1. Add New Student
- Click the **Add New Student** button.
- Fill in the form and click **Add Student**.

### 2. Soft Delete Student
- Click the **Delete** button on any student record.
- The student will be marked as deleted with a timestamp.

### 3. Edit Student (Coming Soon for Interview)
- Click the **Edit** button on any student record.
- Placeholder for edit functionality, to be discussed during the interview.

---

## Future Enhancements
- Implement Edit Functionality with `useUpdateStudent` hook.
- Add Search and Filter Options.
- Add Restore Soft Deleted Students.

---

## Contributing
Feel free to open issues and submit pull requests to improve this application. Contributions are highly appreciated!

---

## License
This project is licensed under the MIT License.