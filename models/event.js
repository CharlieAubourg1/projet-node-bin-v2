const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Event extends Model {}

Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    typeEvent: {
      type: DataTypes.STRING
    },
    invite: {
      type: DataTypes.STRING
    },
    dateEvent: {
      type: DataTypes.DATEONLY
    }  
  }, {
    sequelize: connection,
    timestamps: false,
  });

module.exports = Event;
