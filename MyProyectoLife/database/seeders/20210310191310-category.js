'use strict';

module.exports = {
  //Que se ejecuta cuando hacemos la siembra
  up: async (queryInterface, Sequelize) => {
    let categories = [
      {category:'mujer'},
      {category:'hombre'}
    ]
      return queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     return queryInterface.bulkDelete('categories', null, {});
  }
};
