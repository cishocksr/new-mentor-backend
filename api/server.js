const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`The Mentor Connector Api`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message,
  });
});

module.exports = server;
