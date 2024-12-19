require('dotenv').config({ path: '.env.local' });

const port = process.env.PORT || 3000;

console.log('Using PORT:', port);


const connection = require("./models/db");
require("./models/users");
require("./models/livre");

connection
  .sync({
    alter: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());