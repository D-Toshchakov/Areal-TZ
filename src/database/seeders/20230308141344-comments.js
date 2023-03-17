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
      commentText: 'mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment ',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment ',
      articleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'such a dumb article',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      commentText: 'mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment ',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment ',
      articleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      commentText: 'very helpful article',
      articleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      commentText: 'mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment mid comment ',
      articleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      commentText: 'long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment long comment ',
      articleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
