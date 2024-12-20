const connection = require("./models/db");
const User = require("./models/users");
const Livre = require("./models/livre");
const Event = require("./models/event");
const Borrow = require("./models/borrow");


User.hasMany(Borrow, { foreignKey: "_id" });
Borrow.belongsTo(User, { foreignKey: "_id" });

// Book can be borrowed multiple times
Livre.hasMany(Borrow, { foreignKey: "_id" });
Borrow.belongsTo(Livre, { foreignKey: "_id" });

connection
  .sync({
    force: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());
