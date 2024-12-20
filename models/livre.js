const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Livre extends Model {}

Livre.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    auteur: {
      type: DataTypes.STRING
    },
    date_parution: {
      type: DataTypes.DATEONLY
    }  
  }, {
    sequelize: connection,
    timestamps: false,
  });

module.exports = Livre;
