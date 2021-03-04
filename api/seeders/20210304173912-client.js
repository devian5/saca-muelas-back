'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clients', [{
      name: 'Julian Muñoz',
      phone: '666666666',
      email: 'julian@julian.com',
      createdAt: new Date,
      updatedAt: new Date,
      password: 'password'
  },
  {
    name: 'Isabel Pantoja',
    phone: '777777777',
    email: 'isabel@isabel.com',
    createdAt: new Date,
    updatedAt: new Date,
    password: 'password'

  },
  {
    name: 'Jose María Aznar',
    phone: '555555555',
    email: 'chema@chema.com',
    createdAt: new Date,
    updatedAt: new Date,
    password: 'password'
  }
]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
