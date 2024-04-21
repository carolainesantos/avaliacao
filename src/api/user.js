const UserController = require("../controllers/user");

class UserApi {
  async criarUsuario(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const controller = new UserController();

    try {
      const user = await controller.criarUsuario(nome, email, senha);
      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async alterarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const controller = new UserController();

    try {
      const user = await controller.alterarUsuario(
        Number(id),
        nome,
        email,
        senha
      );
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async deletarUsuario(req, res) {
    const { id } = req.params;
    const controller = new UserController();

    try {
      await controller.deletarUsuario(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarUsuarios(_, res) {
    const controller = new UserController();

    try {
      const users = await controller.listarUsuarios();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarUsuario(req, res) {
    const { id } = req.params;
    const controller = new UserController();

    try {
      const users = await controller.buscarPorId(id);
      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  // Método para login
  async login(req, res) {
    const controller = new UserController();

    try {
      const { email, senha } = req.body;
      const token = await controller.login(email, senha);
      return res.status(200).send(token);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  // Método para validar o token
  async validarToken(req, res, next) {
    const controller = new UserController();
    const token = req.headers.authorization;

    try {
      await controller.validarToken(token);
      next();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = UserApi;
