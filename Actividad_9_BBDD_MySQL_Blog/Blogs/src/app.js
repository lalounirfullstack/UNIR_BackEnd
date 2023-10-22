const express = require('express');
const fs = require('node:fs/promises');
const dayjs = require('dayjs')

// Initiates Express Instance
const app = express();

//To use request with JSON Format
app.use(express.json());

//Middleware - writes HTTP Request into a File
app.use(async (req, res, next)=>{
    const linea = `[${dayjs().format('DD/MM/YYYY HH:mm:ss')}] Method: ${req.method}. URL: ${req.url}\n`;

    await fs.appendFile('./main.log', linea);

    next();

})

//Main API route
app.use('/api', require('./routes/api'));

module.exports = app;