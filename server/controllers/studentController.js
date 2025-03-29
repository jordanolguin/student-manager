const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({ isDeleted: false });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching students', error: err });
    }
};

const createStudent = async (req, res) => {
    const { firstName, lastName, grade } = req.body;
    try {
        const newStudent = new Student({  firstName, lastName, grade });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: 'Error creating student', error: err });
    }
};

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findByIdAndUpdate(id, 
            { isDeleted: true, deletedAt: Date.now() }, 
            { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: 'Error deleting student', error: err });
    }
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, grade } = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, { firstName, lastName, grade }, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: 'Error updating student', error: err });
    }
};

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};