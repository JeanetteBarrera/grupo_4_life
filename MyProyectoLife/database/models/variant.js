'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Variant.belongsTo(models.Product, {
        as:'producto',
        foreignKey:'productId'
      })
      Variant.hasMany(models.Stock,{ as:'stock'})
      Variant.hasOne(models.Cart)
    }
  };
  Variant.init({
    color: DataTypes.STRING,
    image: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Variant',
  });
  return Variant;
};