'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const subcategories= [
      {subcategory:'T-shirts',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Tops',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Dresses',categoryId:1,createdAt:new Date, updatedAt: new Date},
      {subcategory:'Divers',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Jackets',categoryId:1,createdAt:new Date, updatedAt: new Date },
      {subcategory:'Pants',categoryId:1,createdAt:new Date,updatedAt: new Date},
      {subcategory:'Jeans',categoryId:1,createdAt:new Date,updatedAt: new Date },
      {subcategory:'T-shirts',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Divers',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Jackets',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Pants',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Jeans',categoryId:2,createdAt:new Date,updatedAt: new Date },
      {subcategory:'Shirts',categoryId:2,createdAt:new Date,updatedAt: new Date }
    ]
      await queryInterface.bulkInsert('Subcategories', subcategories , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subcategories', null, {});
  }
};
