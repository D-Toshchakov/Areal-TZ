'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      articleName: 'Why playing the stock market in the short term is always a losing proposition',
      articleText: 'Playing the stock market can be a tempting proposition for those looking to make a quick buck. However, the reality is that playing the market in the short term is always a losing proposition. In order to understand why, it is important to first understand the nature of the stock market.The stock market is inherently unpredictable and volatile. Prices can fluctuate rapidly based on a variety of factors, including economic news, political events, and even social media trends. Trying to predict these fluctuations in the short term is nearly impossible, as there are simply too many variables at play. Even professional investors with years of experience and access to advanced analytics tools struggle to consistently beat the market over short periods of time. Instead of trying to time the market in the short term, investors should focus on long-term strategies that prioritize diversification and patience. This approach has been proven to be successful over the long term, as evidenced by the historical performance of major stock indices like the S&P 500.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      articleName: 'How do you practice running when you don\'t feel like it?',
      articleText: 'Running is a great way to stay healthy and in shape, but sometimes it can be hard to find the motivation to lace up your shoes and hit the pavement. Here are some tips for practicing running when you don\'t feel like it:1. Set small goals: Instead of trying to run a full marathon right away, start with smaller goals. 2. Find a running partner: Having someone else to run with can make all the difference. 3. Change up your route: Running the same route every day can get boring quickly. Try exploring new trails or neighborhoods to keep things interesting.4. Listen to music or podcasts: Sometimes all you need to get motivated is a good playlist or podcast.5. Reward yourself: Give yourself something to look forward to after your run, whether it\'s a favorite snack or a relaxing bath. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      articleName: 'How to live in New York for half the price?',
      articleText: 'Living in New York can be an expensive experience, but with a few tips and tricks, it is possible to cut down on costs and live in the city for half the price.Firstly, consider living outside of Manhattan. Another way to save money is by cooking at home instead of eating out. Transportation costs can also add up quickly, so consider using public transportation instead of taxis or ride-sharing services. Entertainment doesn\'t have to break the bank either. Many museums and galleries offer free admission days, and parks like Central Park or Prospect Park are always open for free. Finally, consider finding a roommate or subletting a room in an apartment.',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {})
  }
};
