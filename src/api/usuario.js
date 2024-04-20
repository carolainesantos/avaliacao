const UserController = require("../controllers/usuario");

class UsuarioApi {
  async criarUsuario(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const controller = new UserController();

    try {
      const usuario = await controller.criarUsuario(nome, email, senha);
      return res.status(201).send(usuario);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async alterarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const controller = new UserController();

    try {
      const usuario = await controller.alterarUsuario(
        Number(id),
        nome,
        email,
        senha
      );
      return res.status(200).send(usuario);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async deletarUsuario(req, res) {
    const { id } = req.params;
    const controller = new UsuarioController();

    try {
      await controller.deletarUsuario(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarUsuario(req, res) {
    const controller = new UsuarioController();

    try {
      const usuarios = await controller.listarUsuarios();
      return res.status(200).send(usuarios);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = UsuarioApi;
