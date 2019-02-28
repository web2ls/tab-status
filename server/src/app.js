const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(cors());

server.post('/register', (req, res) => {
    res.send({message: 'Authorization is completed successfully'});
})

server.listen(process.env.PORT || 8081, () => {
    console.log('Server has been started');
})