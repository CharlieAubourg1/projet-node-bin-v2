const connection = require("./models/db");
require("./models/users");
require("./models/livre");
require("./models/borrow");

connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());