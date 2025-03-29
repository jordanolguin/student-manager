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
        deletedAt: {
            type: Date,
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

studentSchema.index({ deletedAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 }); 

const Student = model('Student', studentSchema);

module.exports = Student;