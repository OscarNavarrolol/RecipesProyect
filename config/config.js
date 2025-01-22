module.exports = {
    mysqlDB: {
        DB: process.env.DB_NAME,
        USER_DB: process.env.DB_USER,
        PASSWORD_DB: process.env.DB_PASSWORD,
        HOST_DB: process.env.DB_HOST
    },
    api:{
        key: process.env.API_KEY
    },
    login:{
        key: process.env.LOGIN_KEY
    }
}