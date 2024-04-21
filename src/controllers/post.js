const Post = require("../model/post");

class PostController {
  async criarPostagem(titulo, conteudo, idUsuario) {
    if (
      titulo === undefined ||
      conteudo === undefined ||
      idUsuario === undefined
    ) {
      throw new Error("Titulo e conteudo são obrigatórios");
    }
    const post = await Post.create({ titulo, conteudo, idUsuario });

    return post;
  }

  async buscarPorId(idPost) {
    if (idPost === undefined) {
      throw new Error("Id é obrigatório");
    }

    const post = await Post.findByPk(idPost);

    if (!post) {
      throw new Error("Postagem não encontrada");
    }

    return post;
  }

  async alterarPostagem(idPost, titulo, conteudo) {
    if (
      idPost === undefined ||
      titulo === undefined ||
      conteudo === undefined
    ) {
      throw new Error("IdPost, titulo e conteúdo são obrigatórios");
    }

    const post = await this.buscarPorId(idPost);
    post.titulo = titulo;
    user.conteudo = conteudo;
    post.save();

    return post;
  }

  async deletarPostagem(idPost) {
    if (idPost === undefined) {
      throw new Error("Id é obrigatório");
    }

    const post = await this.buscarPorId(idPost);

    post.destroy();
  }

  async listarPostagens() {
    return Post.findAll();
  }

  async listarPostagensUsuario(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const post = await Post.findOne({
      where: {
        idUsuario: id,
      },
    });

    if (!post) {
      throw new Error("Postagem não encontrada");
    }

    return post;
  }
}

module.exports = PostController;
