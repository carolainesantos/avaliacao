const database = require("../config/database");
const usuario = require("./usuario");

class Postagem {
  constructor() {
    this.model = database.define("postagem", {
      idPost: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: database.Sequelize.STRING,
      },
      conteudo: {
        type: database.Sequelize.STRING,
      },
      idUsuario: {
        type: database.Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: usuario,
          key: "idUsuario",
        },
      },
    });
  }
}

module.exports = new Postagem().model;
