'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Appointments', [{
      covid: false,
      date: new Date,
      createdAt: new Date,
      updatedAt: new Date
  },
  {
    covid: true,
    date: new Date,
    createdAt: new Date,
    updatedAt: new Date

  },
  {
      covid: false,
      date: new Date,
      createdAt: new Date,
      updatedAt: new Date
  }
]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
