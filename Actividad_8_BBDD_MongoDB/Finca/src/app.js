const express = require('express');

// Initiates Express Instance
const app = express();

//To use request with JSON Format
app.use(express.json());

//Main API Route
app.use('/api/inmuebles', require('./routes/inmueble'))

module.exports = app;
