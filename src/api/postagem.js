const PostagemController = require("../controller/postagem");

class PostagemApi {
  async criarPostagem(req, res) {
    const titulo = req.body.titulo;
    const conteudo = req.body.conteudo;
    const controller = new PostagemController();

    try {
      const postagem = await controller.criarUsuario(titulo, conteudo);
      return res.status(201).send(postagem);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async alterarPostagem(req, res) {
    const { idPost } = req.params;
    const { titulo, conteudo } = req.body;
    const controller = new PostagemController();

    try {
      const postagem = await controller.alterarPostagem(
        Number(idPost),
        titulo,
        conteudo
      );
      return res.status(200).send(postagem);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async deletarPostagem(req, res) {
    const { idPost } = req.params;
    const controller = new PostagemController();

    try {
      await controller.deletarPostagem(Number(idPost));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarPostagem(req, res) {
    const controller = new PostagemController();

    try {
      const postagens = await controller.listarPostagem();
      return res.status(200).send(postagens);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = PostagemApi;
