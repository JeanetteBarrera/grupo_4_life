'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Subcategory,{
        //as:'subcategoria',
        foreingKey : 'subcategoryId'
      })
      Product.hasMany(models.Variant,{
        as:'variantes'
      })
      Product.hasMany(models.Stock, {
        as:'stock'
      })
      Product.hasOne(models.Cart)
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};