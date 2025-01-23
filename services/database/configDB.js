const { Sequelize } = require('sequelize');
const { mysqlDB } = require('../../config/config');

const sequelize = new Sequelize(
  mysqlDB.DB,
  mysqlDB.USER_DB,
  mysqlDB.PASSWORD_DB,
  {
    host: mysqlDB.HOST_DB,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
