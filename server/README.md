# Student Manager - Backend (Server)

This is the backend for the **Student Manager** application, built with **Node.js**, **Express**, and **MongoDB**. It provides a RESTful API for managing student data, including creating, reading, updating, and soft deleting records.

---

## Tech Stack

- **Node.js** – JavaScript runtime for the backend.
- **Express.js** – Web framework for building REST APIs.
- **MongoDB** – NoSQL database to store student data.
- **Mongoose** – ODM library for MongoDB.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jordanolguin/student-manager.git
cd student-manager/server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `server` directory with the following:
```
MONGODB_URI=mongodb://127.0.0.1:27017/student-manager
PORT=3001
```

### 4. Run the Server
```bash
node server.js
```
The server will run at:
```
🌍 http://localhost:3001
```

---

## API Routes

### **Get All Students**
```
GET /students
```
- Retrieves all active (non-deleted) students.

---

### **Create a New Student**
```
POST /students
```
- Creates a new student.
- **Body:**
```json
{
  "firstName": "Sofia",
  "lastName": "Gomez",
  "grade": 95
}
```

---

### **Update a Student**
```
PUT /students/:id
```
- Updates an existing student's details.
- **Body:**
```json
{
  "firstName": "Ali",
  "lastName": "Khan",
  "grade": 88
}
```

---

### **Soft Delete a Student**
```
DELETE /students/:id
```
- Soft deletes a student by setting `isDeleted` to `true` and adding a `deletedAt` timestamp.
- The record is auto-deleted after 30 days using MongoDB’s TTL index.

---

## Seeding the Database

To populate the database with initial student data:
```bash
node seeds/seed.js
```
- Seeds the data from `studentSeeds.json` into the database.
- Deletes any existing data before inserting new records.

---

## Project Structure
```
/server
├── /config
│   └── connection.js       # MongoDB connection
├── /controllers
│   └── studentController.js # CRUD logic for students
├── /models
│   └── Student.js          # Mongoose schema
├── /routes
│   └── students.js         # API routes for student operations
├── /seeds
│   ├── seed.js             # Seed script to populate DB
│   └── studentSeeds.json   # Initial seed data
├── /node_modules
├── .gitignore
├── package.json
└── server.js               # Entry point for the backend
```

---

## Additional Notes
- **Soft Deletion Logic:** Soft deleted students are automatically removed after 30 days.
- **Error Handling:** API responses return meaningful error messages for debugging.

---

## Author
- **Jordan Olguin** – [GitHub](https://github.com/jordanolguin)

---

## License
This project is licensed under the [MIT License](LICENSE).