'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sizes = [
      {size:'S',createdAt:new Date},
      {size:'M',createdAt:new Date},
      {size:'L',createdAt:new Date},
      {size:'XL',createdAt:new Date}
    ]
    await queryInterface.bulkInsert('sizes',sizes,{});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('sizes', null, {});
  }
};

