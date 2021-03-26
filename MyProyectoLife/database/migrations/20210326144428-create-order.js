'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName : "addresses"
          },
          key : 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName : "users"
          },
          key : 'id'
        }
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName : "carts"
          },
          key : 'id'
        }
      },
      total: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};