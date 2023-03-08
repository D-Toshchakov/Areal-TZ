'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      id: 1,
      articleName: 'great article about cooking',
      articleText: 'i dont cook',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      articleName: 'some short article',
      articleText: 'some text',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {})
  }
};
