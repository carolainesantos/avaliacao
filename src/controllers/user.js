const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const JWT_SECRET_KEY = "qualquercoisa";

class UserController {
  async criarUsuario(nome, email, senha) {
    if (nome === undefined || email === undefined || senha === undefined) {
      throw new Error("Nome, email e senha são obrigatórios");
    }

    const senhaCriptografada = await bcrypt.hash(senha, saltRounds);

    const user = await User.create({ nome, email, senha: senhaCriptografada });
    return user;
  }

  async buscarPorId(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
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

    const user = await this.buscarPorId(id);

    user.nome = nome;
    user.email = email;
    user.senha = senha;
    user.save();

    return user;
  }

  async deletarUsuario(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const user = await this.buscarPorId(id);

    user.destroy();
  }

  async listarUsuarios() {
    return User.findAll();
  }

  // Pega parametros que foram informados no postman
  async login(email, senha) {
    if (!email || !senha) {
      throw new Error("Email ou senha inválido");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Email ou senha inválido");
    }

    // Compara a senha informada com a senha do usuário
    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      throw new Error("Email ou Senha inválido");
    }

    // Gera o token a partir da assinatura com a chave secreta
    const jwtToken = jwt.sign({ id: user.id }, JWT_SECRET_KEY);

    return { token: jwtToken };
  }

  async validarToken(token) {
    try {
      // Verifica se o token é válido e retorna o payload
      const payload = jwt.verify(token, JWT_SECRET_KEY);
      return payload;
    } catch (error) {
      throw new Error("Token inválido");
    }
  }
}

module.exports = UserController;
