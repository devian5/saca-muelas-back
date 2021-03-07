const config = require('./config/config');

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username, 
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql',
        port: config.development.port,
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

module.exports = sequelize;