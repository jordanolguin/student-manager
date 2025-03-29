require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require("./config/connection");
const studentRoutes = require('./routes/students');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Server running on http://localhost:${PORT}`);
    });
});

db.on('error', (err) => {
    console.error(`❌ MongoDB connection error: ${err}`);
});