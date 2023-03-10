'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      articleName: 'great article about cooking',
      articleText: 'i dont cook',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
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
