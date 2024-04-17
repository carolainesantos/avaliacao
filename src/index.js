const express = require("express");
const database = require("./src/config/database");
const UsuarioApi = require("./src/api/UsuarioApi");
const PostagemApi = require("./src/api/PostagemApi");

const app = express();
const PORT = 3000;
app.use(express.json());

// Rotas de usuários
const usuarioApi = new UsuarioApi();
app.get("/usuarios", usuarioApi.listarUsuario);
app.post("/usuarios", usuarioApi.criarUsuario);
app.put("/usuarios/:idUsuario", usuarioApi.alterarUsuario);
app.delete("/usuarios/:idUsuario", usuarioApi.deletarUsuario);

// Rotas de postagens
const postagemApi = new PostagemApi();
app.get("/postagens", postagemApi.listarPost);
app.post("/postagens", postagemApi.criarPost);
app.put("/postagens/:idPost", postagemApi.alterarPost);
app.delete("/posts/:idPost", postagemApi.deletarPost);

database
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return database.sync({ force: true });
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  });
