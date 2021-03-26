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
      // define association here
      Cart.belongsTo(models.User,{
        foreignKey: 'userId'
      })
      Cart.belongsTo(models.Product,{
        foreignKey: 'productId'
      })
      Cart.belongsTo(models.Variant, {
        foreignKey: 'variantId'
      })
      Cart.belongsTo(models.Size, {
        foreignKey: 'sizeId'
      })
      Cart.hasOne(models.Order)
    }
  };
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    variantId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};