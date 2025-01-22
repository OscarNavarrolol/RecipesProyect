const { Sequelize } = require('sequelize');
const config = require('../../config/config');

const sequelize = new Sequelize(
    config.mysqlDB.DB,
    config.mysqlDB.USER_DB,
    config.mysqlDB.PASSWORD_DB,
    {
        host: config.mysqlDB.HOST_DB,
        dialect: 'mysql',
        logging: false
    }
);

module.exports = sequelize;