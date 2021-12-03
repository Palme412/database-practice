'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dying_lately extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dying_lately.init({
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    tracks: DataTypes.INTEGER,
    playtime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dying_lately',
  });
  return dying_lately;
};