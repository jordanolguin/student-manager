const { Schema, model } = require('mongoose');

const studentSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        grade: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        isDeleted: {
            type: Boolean,
            default: false,
            index: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true, }
);

const Student = model('Student', studentSchema);

module.exports = Student;