const Usuario = require("../model/usuario");

class UsuarioController {
  async criarUsuario(nome, email, senha) {
    if (nome === undefined || email === undefined || senha === undefined) {
      throw new Error("Nome, email e senha são obrigatórios");
    }

    const usuario = await Usuario.create({ nome, email, senha });
    return usuario;
  }

  async buscarPorId(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    return usuario;
  }

  async alterarUsuario(id, nome, email, senha) {
    if (
      id === undefined ||
      nome === undefined ||
      email === undefined ||
      senha === undefined
    ) {
      throw new Error("Id, nome, email e senha são obrigatórios");
    }

    const usuario = await this.buscarPorId(id);

    user.nome = nome;
    user.email = email;
    user.senha = senha;
    usuario.save();

    return usuario;
  }

  async deletarUsuario(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const usuario = await this.buscarPorId(id);

    usuario.destroy();
  }

  async listarUsuarios() {
    return Usuario.findAll();
  }
}

module.exports = UsuarioController;
