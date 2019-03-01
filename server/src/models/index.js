const Sequelize = require('sequelize');
const config = require('../config/config');
const getUserModel = require('./User');
const db = {};

const sequelize = new Sequelize(
        config.db.database,
        config.db.user,
        config.db.password,
        config.db.options,
)

const User = getUserModel(Sequelize, sequelize);

db['User'] = User;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {db};