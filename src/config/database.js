const Sequelize = require("sequelize");

const database = new Sequelize("avaliacao2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = database;
