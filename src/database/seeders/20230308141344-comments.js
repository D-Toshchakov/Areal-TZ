'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      commentText: 'awesome araticle!',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'useless article',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'very helpful article',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'such a dumb article',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
