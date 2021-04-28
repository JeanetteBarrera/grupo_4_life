'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const subcategories= [
      {subcategory:'Remeras',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Tops',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Vestidos',categoryId:1,createdAt:new Date, updatedAt: new Date},
      {subcategory:'Buzos',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Camperas',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Pantalones',categoryId:1,createdAt:new Date,updatedAt: new Date},
      {subcategory:'Jeans',categoryId:1,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Remeras',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Buzos',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Camperas',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Pantalones',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Jeans',categoryId:2,createdAt:new Date,updatedAt: new Date }
    ]
      await queryInterface.bulkInsert('Subcategories', subcategories , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subcategories', null, {});
  }
};
