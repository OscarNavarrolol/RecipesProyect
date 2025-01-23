require('dotenv').config();

module.exports = {
  mysqlDB: {
    DB: process.env.DB_NAME,
    USER_DB: process.env.DB_USER ,
    PASSWORD_DB: process.env.DB_PASSWORD ,
    HOST_DB: process.env.DB_HOST ,
  },
  jwtSecret: process.env.LOGIN_KEY ,
  port: process.env.PORT ,
  api: process.env.API_KEY
};
