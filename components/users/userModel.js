const Sequelize = require('sequelize');
const sequelize = require('../../services/database/configDB');

const User = sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        email: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "users",
        timestamps: false,
    }
)

module.exports = User;