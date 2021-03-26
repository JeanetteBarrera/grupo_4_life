'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const stocks =[
      {productId:1,variantId:1,sizeId:1,stock:10,createdAt:new Date},
      {productId:1,variantId:1,sizeId:2,stock:10,createdAt:new Date},
      {productId:1,variantId:1,sizeId:3,stock:10,createdAt:new Date},
      {productId:1,variantId:1,sizeId:4,stock:10,createdAt:new Date},
      {productId:1,variantId:2,sizeId:1,stock:10,createdAt:new Date},
      {productId:1,variantId:3,sizeId:3,stock:10,createdAt:new Date},
      {productId:2,variantId:4,sizeId:4,stock:10,createdAt:new Date}
    ]
    await queryInterface.bulkInsert('stocks',stocks , {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('stocks', null, {});
     
  }
};
