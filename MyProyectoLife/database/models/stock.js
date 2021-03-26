'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.belongsTo(models.Product,{
        foreignKey: 'productId'
      })
      Stock.belongsTo(models.Variant,{
        foreignKey:'variantId'
      })
      Stock.belongsTo(models.Size,{
        foreignKey:'sizeId'
      })
    }
  };
  Stock.init({
    stock: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    variantId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};