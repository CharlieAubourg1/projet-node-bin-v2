const connection = require("./models/db");
const User = require("./models/users");
const Livre = require("./models/livre");
const Event = require("./models/event");
const Borrow = require("./models/borrow");


User.hasMany(Borrow, { foreignKey: "user_id" });
Borrow.belongsTo(User, { foreignKey: "user_id" });

// Book can be borrowed multiple times
Livre.hasMany(Borrow, { foreignKey: "book_id" });
Borrow.belongsTo(Livre, { foreignKey: "book_id" });

connection
  .sync({
    force: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());
