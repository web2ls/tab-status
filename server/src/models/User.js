// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const bcrypt = require('bcrypt-nodejs');

function hashPassword(user, options) {
        const SALT_FACTOR = 8;

        if (!user.changed('password')) {
                return;
        }

        // return bcrypt.hash(user.password, 8, function(error, hash) {
        //         if (error) {
        //                 console.log('error exists on getting hash');
        //                 return;
        //         }

        //         console.log('Hash is created');
        //         user.setDataValue('password', hash);
        // })

        // const salt =  bcrypt.genSaltSync(SALT_FACTOR);
        // const hash = bcrypt.hashSync(user.password, salt);
        // return user.setDataValue('password', hash);

        return bcrypt.genSalt(SALT_FACTOR, (error, salt) => {
                console.log('salt is: ', salt);
                bcrypt.hash(user.password, salt, null, (error, hash) => {
                        console.log('Hash is:', hash);
                        return user.setDataValue('password', hash);
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
               console.log('call compare password function');
               console.log('arrived password', password);
               console.log('current user password', this.password);
               return true;
               // return bcrypt.compareSync(password, this.password);
       }

       return User;
}