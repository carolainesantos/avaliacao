const database = require("../config/database");
const user = require("./user");

/* Inicio da classe pra criação 
  do modelo no banco de dados */
class Post {
  constructor() {
    this.model = database.define("post", {
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
          model: user,
          key: "idUsuario",
        },
      },
    });
  }
}

module.exports = new Post().model;
