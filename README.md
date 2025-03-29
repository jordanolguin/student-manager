## Student Manager - Full Stack Application

Welcome to the **Student Manager** application. This project is a **MERN Stack** (MongoDB, Express, React, Node.js) application that allows users to manage student records with features such as adding, editing, soft deleting, and viewing students.

---

## File Structure Overview

```
student-manager/
├── client/                  # Frontend code (React)
│   ├── public/              
│   ├── src/
│   │   ├── api/             
│   │   ├── components/      
│   │   ├── hooks/           
│   │   ├── utils/           
│   │   ├── App.css          
│   │   ├── App.js           
│   │   ├── index.js         
│   │   └── .gitignore       
│   ├── package.json         
│   └── README.md            
├── server/                  # Backend code (Node.js/Express)
│   ├── config/              
│   ├── controllers/         
│   ├── models/              
│   ├── routes/              
│   ├── seeds/               
│   ├── server.js            
│   └── README.md            
├── .gitignore               
├── package.json             
└── README.md                 
```

---

## Key Features

**Add New Student:** Users can add new students using a smooth modal form.  
**Soft Delete Student:** Marks a student as deleted while retaining the data for 30 days.  
**Edit Student (Placeholder for Interview):** Editing functionality is included as a placeholder to be implemented later.  
**Student List Display:** Active and soft-deleted students are displayed with relevant timestamps.  

---

## Setup and Installation

### 1. **Clone the Repository**
```bash
git clone https://github.com/jordanolguin/student-manager.git
```

### 2. **Install Dependencies**
- Navigate to the root directory:
```bash
cd student-manager
```

- Install backend dependencies:
```bash
cd server
npm install
```

- Install frontend dependencies:
```bash
cd ../client
npm install
```

---

## Starting the Application

### 1. **Run Backend Server**
```bash
cd server
npm start
```
- The server will run on [http://localhost:3001](http://localhost:3001).

### 2. **Run Frontend Client**
```bash
cd ../client
npm start
```
- The client will run on [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

### Backend (`server/.env`)
Create a `.env` file in the `server` directory with the following:
```
MONGODB_URI=mongodb://127.0.0.1:27017/student-manager
PORT=3001
```

---

## API Documentation

The API endpoints available are:

| Method   | Endpoint        | Description               |
|----------|-----------------|---------------------------|
| `GET`    | `/students`      | Get all active students   |
| `POST`   | `/students`      | Add a new student         |
| `PUT`    | `/students/:id`  | Update a student's data   |
| `DELETE` | `/students/:id`  | Soft delete a student     |

---

## Frontend Overview

- **Framework:** React with functional components.
- **State Management:** Using `useState` and `useEffect` hooks.
- **API Integration:** Axios is used for communicating with the backend.
- **Custom Hooks:**
  - `useFetchStudents` - Fetches students from the API.
  - `useCreateStudent` - Adds a new student to the database.
  - `useDeleteStudent` - Soft deletes a student and updates the UI.
- **Styling:** CSS modules with consistent theming.
- **Animations:** Smooth UI interactions powered by **Framer Motion**.

---

## Backend Overview

- **Framework:** Express.js with RESTful API routes.
- **Database:** MongoDB with Mongoose ODM.
- **Data Model:**
  - `Student` model with fields:
    - `firstName`, `lastName`, `grade`, `isDeleted`, `createdAt`, `deletedAt`
  - Soft delete mechanism using `isDeleted` and `deletedAt` fields.
- **Controllers:**
  - CRUD operations with proper error handling.
- **Seed Data:**
  - Initial seed data available to populate the database.
- **Soft Delete Logic:**
  - Students marked as deleted are automatically removed after 30 days using MongoDB's `expireAfterSeconds`.

---

## Testing Instructions

- Use **Insomnia** or **Postman** to test API endpoints.
- Frontend operations can be tested directly through the browser at:
```
http://localhost:3000
```

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

- Implement **Edit Student** functionality.
- Add search and filter options to the student list.
- Restore deleted students within 30 days.
- Add pagination for large datasets.

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Author
**Jordan Olguin**  
[GitHub Profile](https://github.com/jordanolguin)