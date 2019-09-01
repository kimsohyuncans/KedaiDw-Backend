'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('categories', [
      {
        name: 'drink',
      },
      {
        name: 'food'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
