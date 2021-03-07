'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Appointments', [{
      covid: false,
      date: '2020-12-04 12:44:16',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
    covid: true,
    date: '2020-03-04 21:44:16',
    createdAt: new Date,
    updatedAt: new Date

  },
  {
      covid: false,
      date: '2021-03-04 18:44:16',
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
