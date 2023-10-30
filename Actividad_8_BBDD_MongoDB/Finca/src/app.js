const express = require('express');
const cors = require('cors');


// Initiates Express Instance
const app = express();

//Use CORS
app.use(cors());

//To use request with JSON Format
app.use(express.json());

//Main API Route
app.use('/api/inmuebles', require('./routes/inmueble'))

module.exports = app;
