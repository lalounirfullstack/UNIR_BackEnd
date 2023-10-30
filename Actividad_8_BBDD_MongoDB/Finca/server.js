//HTTP Protocol
const http = require('http');

//Mongoose used for MongoDB Connection
const mongoose = require('mongoose');

//Express Applicatipn
const app = require('./src/app');

//DotEnv Config
require('dotenv').config();

//Builds Server
const server = http.createServer(app);

//Server Listener
const PORT = process.env.PORT || 3000

// Connection to MongoDB
  mongoose
    .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,
    useNewUrlParser: true, // Add these options for compatibility
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });