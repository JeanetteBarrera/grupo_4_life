'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const products = [
      {name:'Remera Basic', description:'remera basica con bordes y estampado ',price:500,subcategoryId:1,createdAt:new Date},
      {name:'Top Basic', description:'rera baica con bores y estamdo ',price:600,subcategoryId:2,createdAt:new Date},
      {name:'Vestido Basic', description:'rera basica conbords y estampado ',price:700,subcategoryId:3,createdAt:new Date},
      {name:'Buzo Basic', description:'ra basica con boes y estamdo ',price:800,subcategoryId:4,createdAt:new Date}
    ]
    await queryInterface.bulkInsert('products',products , {});
    
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('products', null, {});
     
  }
};
