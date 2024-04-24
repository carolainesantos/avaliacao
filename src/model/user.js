const database = require("../config/database");

/* Inicio da classe pra criação do 
   modelo no banco de dados */
class User {
  constructor() {
    this.model = database.define("user", {
      idUsuario: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: database.Sequelize.STRING,
      },
      email: {
        type: database.Sequelize.STRING,
      },
      senha: {
        type: database.Sequelize.STRING,
      },
    });
  }
}

module.exports = new User().model;
