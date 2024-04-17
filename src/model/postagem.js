const database = require("../config/database");

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
      id: {
        type: database.Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: Usuario,
            key: 'id'
        },
    });
  }
}

module.exports = new Postagem().model;
