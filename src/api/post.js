const PostController = require("../controllers/post");

class PostApi {
  async criarPostagem(req, res) {
    const titulo = req.body;
    const conteudo = req.body;
    const idUsuario = req.body;
    const controller = new PostController();

    try {
      const post = await controller.criarPostagem(idUsuario, titulo, conteudo);
      return res.status(201).send(post);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async alterarPostagem(req, res) {
    const { idPost } = req.params;
    const { titulo, conteudo } = req.body;
    const controller = new PostController();

    try {
      const post = await controller.alterarPostagem(
        Number(idPost),
        titulo,
        conteudo
      );
      return res.status(200).send(post);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async deletarPostagem(req, res) {
    const { idPost } = req.params;
    const controller = new PostController();

    try {
      await controller.deletarPostagem(Number(idPost));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarPostagens(_, res) {
    const controller = new PostController();

    try {
      const posts = await controller.listarPostagens();
      return res.status(200).send(posts);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
  async listarPostagem(req, res) {
    const { idPost } = req.params;
    const controller = new PostController();

    try {
      const post = await controller.buscarPorId(idPost);
      return res.status(200).send(post);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  async listarPostagensUsuario(req, res) {
    const { id } = req.params;
    const controller = new PostController();

    try {
      const post = await controller.listarPostagensUsuario(id);
      return res.status(200).send(post);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = PostApi;
