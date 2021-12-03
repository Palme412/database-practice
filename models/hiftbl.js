'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HIFTBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HIFTBL.init({
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    tracks: DataTypes.INTEGER,
    playtime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HIFTBL',
  });
  return HIFTBL;
};