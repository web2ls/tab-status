module.exports = (Sequelize, sequelize) => {
       return sequelize.define('user', {
               email: {
                       type: Sequelize.STRING,
                       unique: true
               },
               password: Sequelize.STRING
       }) 
}