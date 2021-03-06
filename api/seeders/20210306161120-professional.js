'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Professionals', [{
      name: 'Maria Magdalena',
      specialty: 'dentist',
      phone: '333334444',
      createdAt: new Date,
      updatedAt: new Date,
    },
    {
      name: 'Martin Luther',
      specialty: 'periodontologist',
      phone: '333335555',
      createdAt: new Date,
      updatedAt: new Date,
    },

   ]); down: async (queryInterface, Sequelize) => {

  }
}};



