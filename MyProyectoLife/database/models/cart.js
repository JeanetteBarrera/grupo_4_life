'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Orden, {
        as: "orden",
        foreignKey: "ordenId"
      })
    }
  };
  Cart.init({
    total: DataTypes.STRING,
    fecha: DataTypes.DATE,
    ordenId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};