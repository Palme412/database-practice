'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trauma_Factory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trauma_Factory.init({
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    tracks: DataTypes.INTEGER,
    playtime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trauma_Factory',
  });
  return Trauma_Factory;
};