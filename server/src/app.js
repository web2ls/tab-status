const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(cors());

server.get('/status', (req, res) => {
    res.send({message: 'Hello World'});
})

server.listen(process.env.PORT || 8081, () => {
    console.log('Server has been started');
})