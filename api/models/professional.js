'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    static associate(models) {
      this.hasMany(models.Appointment, {
        foreignKey: 'professionalId',
        sourceKey:'id'
    });
}
  };
  Professional.init({
    name: DataTypes.STRING,
    specialty: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professional',
  });
  return Professional;
};