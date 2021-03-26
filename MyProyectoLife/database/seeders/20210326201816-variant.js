'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const variantes = [
      {color:'#555077',image:"bnlsdfndkñbsdb.jpg",productId:1,createdAt: new Date},
      {color:'#000000',image:"lalalalalaladb.jpg",productId:1,createdAt: new Date},
      {color:'#ffffff',image:"sasasasasasasasasassdb.jpg",productId:1,createdAt: new Date},
      {color:'#b0b0b0',image:"sasasasasasasasasassdb.jpg",productId:2,createdAt: new Date}
    ]

    await queryInterface.bulkInsert('variants',variantes , {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('variants', null, {});
    
  }
};
