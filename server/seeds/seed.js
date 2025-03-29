require('dotenv').config();
const Student = require('../models/Student');
const db = require('../config/connection');
const studentSeeds = require('./studentSeeds.json');

db.once('open', async () => {
    try {
        await Student.deleteMany({});
        
        const students = await Student.insertMany(studentSeeds);
        console.log(`🌱 Seeded ${students.length} students!`);

        process.exit(0);
    } catch (err) {
        console.error('❌ Error seeding data:', err);
        process.exit(1);
    }
});

db.on('error', (err) => {
    console.error(`❌ MongoDB connection error: ${err}`);
});