'use strict';

module.exports = {

  //se ejecuta cuando hacemos la carga/siembra 
  up: async (queryInterface, Sequelize) => {
    
    const categories = [
      {category:'Mujer',createdAt:new Date, updatedAt: new Date },
      {category: 'Hombre',createdAt:new Date, updatedAt: new Date}
    ]
    //creamos los datos que luego pasamos como segundo parametro para cargarlo
    await queryInterface.bulkInsert('categories', categories, {});
  },

  //se ejecuta cuando deshacemos la carga/siembra
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};