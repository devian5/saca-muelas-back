'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, {
        foreignKey: 'clientId',
        sourceKey:'id'
    });
    

    }
  };
  Appointment.init({
    covid: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};