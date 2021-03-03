'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Professionals', [{
      name: 'Manuel',
      iso: 'ES',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'France',
      iso: 'FR',
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
