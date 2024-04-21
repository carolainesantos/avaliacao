const express = require("express");
const database = require("./src/config/database");
const UserApi = require("./src/api/user");
const PostApi = require("./src/api/post");
// const authMiddleware = require("./src/middleware/auth");

const app = express();
const PORT = 3000;
app.use(express.json());

// Rotas usuários
const userApi = new UserApi();
app.post("/login", userApi.login);
app.get("/users", userApi.listarUsuarios);

app.use(userApi.validarToken);
app.get("/user/:id", userApi.listarUsuario);
app.post("/users", userApi.criarUsuario);
app.put("/users/:id", userApi.alterarUsuario);
app.delete("/users/:id", userApi.deletarUsuario);

// Rotas postagens
const postApi = new PostApi();
app.get("/posts", postApi.listarPostagens);
app.get("/posts/:idPost", postApi.listarPostagem);
app.get("/posts/user/:id", postApi.listarPostagensUsuario);
app.post("/posts", postApi.criarPostagem);
app.put("/posts/:idPost", postApi.alterarPostagem);
app.delete("/posts/:idPost", postApi.deletarPostagem);

database
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return database.sync({ force: false });
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
