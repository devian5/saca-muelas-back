'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clinics', [{
      name: 'Gozimuelas',
      phone: '666666666',
      email: 'gozi@gmail.com',
      password: 'Represen23$',
      createdAt: new Date,
      updatedAt: new Date
    }])
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
