'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sizes = [
      {size:'S',createdAt:new Date, updatedAt: new Date},
      {size:'M',createdAt:new Date,updatedAt: new Date},
      {size:'L',createdAt:new Date,updatedAt: new Date},
      {size:'XL',createdAt:new Date,updatedAt: new Date}
    ]
    await queryInterface.bulkInsert('sizes',sizes,{});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('sizes', null, {});
  }
};

