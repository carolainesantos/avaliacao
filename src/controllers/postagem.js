const Postagem = require("../model/postagem");

class PostagemController {
  async criarPostagem(titulo, conteudo) {
    if (titulo === undefined || conteudo === undefined) {
      throw new Error("Titulo e conteudo são obrigatórios");
    }
    const postagem = await Postagem.create({ titulo, conteudo });

    return postagem;
  }

  async buscarPorId(idPost) {
    if (idPost === undefined) {
      throw new Error("Id é obrigatório");
    }

    const postagem = await Postagem.findByPk(idPost);

    if (!postagem) {
      throw new Error("Postagem não encontrada");
    }

    return postagem;
  }

  async alterarPostagem(idPost, titulo, conteudo) {
    if (
      idPost === undefined ||
      titulo === undefined ||
      conteudo === undefined
    ) {
      throw new Error("IdPost, titulo e conteúdo são obrigatórios");
    }

    const postagem = await this.buscarPorId(idPost);
    postagem.titulo = titulo;
    usuario.conteudo = conteudo;
    postagem.save();

    return postagem;
  }

  async deletarPostagem(idPost) {
    if (idPost === undefined) {
      throw new Error("Id é obrigatório");
    }

    const postagem = await this.buscarPorId(idPost);

    postagem.destroy();
  }

  async listarPostagens() {
    return Postagem.findAll();
  }
}

module.exports = PostagemController;
