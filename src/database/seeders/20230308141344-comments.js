'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      id: 1,
      commentText: 'awesome araticle!',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      commentText: 'useless article',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      commentText: 'very helpful article',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
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
