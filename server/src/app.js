const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {db} = require('./models');
// const Sequelize = require('sequelize');
const config = require('./config/config');

const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(cors());

require('./routes')(server);

db.sequelize.sync()
.then(() => {
    server.listen(config.port, () => {
        console.log(`Server has been started on ${config.port} port...`);
    })
})
.catch(error => {
    console.log('Error on startup database');
})