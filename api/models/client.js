'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
       
        static associate(models) {
            this.hasMany(models.Appointment, {
                foreignKey: 'clientId',
                sourceKey:'id'
            });
        }
    };
    Client.init({
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Client',
    });
    return Client;
};