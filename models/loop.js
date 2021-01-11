'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Loop.hasMany(models.Module, {
        foreignKey: 'loopId',
        as: 'modules'
      })
    }
  };
  Loop.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loop',
  });
  return Loop;
};