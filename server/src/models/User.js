const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const bcrypt = require('bcrypt-nodejs');

function hashPassword(user, options) {
        const SALT_FACTOR = 8;

        if (!user.changed('password')) {
                return;
        }

        return bcrypt.genSalt(SALT_FACTOR, (error, salt) => {
                bcrypt.hash(user.password, salt, null, (error, hash) => {
                        user.setDataValue('password', hash);
                })
        })
}

module.exports = (Sequelize, sequelize) => {
       const User = sequelize.define('user', {
               email: {
                       type: Sequelize.STRING,
                       unique: true
               },
               password: Sequelize.STRING
       },
       {
                hooks: {
                        beforeCreate: hashPassword,
                        beforeUpdate: hashPassword,
                        beforeSave: hashPassword,
                }
       })

       User.prototype.comparePassword = function(password) {
               return bcrypt.compareSync(password, this.password);
       }

       return User;
}