'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.belongsTo(models.Loop, {
        foreignKey: 'loopId',
        onDelete: 'CASCADE'
      })
    }
  };
  Module.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    beat_1_1: DataTypes.BOOLEAN,
    beat_1_2: DataTypes.BOOLEAN,
    beat_1_3: DataTypes.BOOLEAN,
    beat_1_4: DataTypes.BOOLEAN,
    beat_2_1: DataTypes.BOOLEAN,
    beat_2_2: DataTypes.BOOLEAN,
    beat_2_3: DataTypes.BOOLEAN,
    beat_2_4: DataTypes.BOOLEAN,
    beat_3_1: DataTypes.BOOLEAN,
    beat_3_2: DataTypes.BOOLEAN,
    beat_3_3: DataTypes.BOOLEAN,
    beat_3_4: DataTypes.BOOLEAN,
    beat_4_1: DataTypes.BOOLEAN,
    beat_4_2: DataTypes.BOOLEAN,
    beat_4_3: DataTypes.BOOLEAN,
    beat_4_4: DataTypes.BOOLEAN,
    effects: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};