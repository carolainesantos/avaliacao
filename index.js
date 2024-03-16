const express = require("express");

const app = express();
app.use(express.json());

const usuarios = [];
const postagens = [];

app.get("/usuario", (req, res) => {
  res.json(usuarios);
});

app.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const usuario = usuarios.find((usuario) => usuario.id === Number(id));

  if (!usuario) {
    res.status(404).json({ error: "Usuario não encontrado" });
  }

  res.json(usuario);
});

app.post("/usuario", (req, res) => {
  const { nome, email } = req.body;

  let id = 0;

  if (nome === "" || email === "") {
    return res.status(400).json({ error: "Nome ou email vazio" });
  }

  for (const usuario of usuarios) {
    if (usuario.id > id) {
      id = usuario.id;
    }
  }

  const usuario = {
    id: id + 1,
    nome,
    email,
  };
  usuarios.push(usuario);

  res.status(201).json(usuario);
});

app.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (nome === "" || email === "") {
    return res.status(400).json({ error: "Nome ou email vazio" });
  }

  // FindIndex faz o mesmo que o find, mas retorna o index do elemento encontrado, caso não encontre retorna -1.
  const index = usuarios.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios[index] = {
    id: Number(id),
    nome,
    email,
  };

  res.status(200).json(usuarios[index]);
});

app.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;

  const index = usuarios.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);

  res.status(204).send();
});

// Inicio de Postagens

app.get("/postagem/autor/:id", (req, res) => {
  const { id } = req.params;
  /* Para conseguir pegar todas as postagens 
  de 1 autor eu precisei usar o filter pois 
  ele pega todos os elementos que correspondem aquele filtro*/
  const postagem = postagens.filter(
    (postagem) => postagem.autorId === Number(id)
  );

  if (postagem.length === 0) {
    res.status(404).json({ error: "Não existem postagens pra esse autor" });
  }

  res.json(postagem);
});

app.get("/postagem/:id", (req, res) => {
  const { id } = req.params;
  const postagem = postagens.find((postagem) => postagem.id === Number(id));

  if (!postagem) {
    res.status(404).json({ error: "Postagem não encontrada" });
  }

  res.json(postagem);
});

app.get("/postagem", (req, res) => {
  res.json(postagens);
});

app.post("/postagem", (req, res) => {
  const { autorId, titulo, conteudo } = req.body;
  let id = 0;

  if (titulo === "" || conteudo === "") {
    return res.status(400).json({ error: "Titulo ou conteudo vazio" });
  }

  const autor = usuarios.find((usuario) => usuario.id === Number(autorId));
  if (!autor) {
    return res.status(400).json({ error: "Autor não encontrado" });
  }

  // Verifica o maior id para o novo postagem. Se não houver nenhum id, o id será 1. Se houver, o id será o maior + 1.
  for (const postagem of postagens) {
    if (postagem.id > id) {
      id = postagem.id;
    }
  }

  const postagem = {
    id: id + 1,
    autorId,
    titulo,
    conteudo,
  };
  postagens.push(postagem);

  res.status(201).json(postagem);
});

app.delete("/postagem/:id", (req, res) => {
  const { id } = req.params;

  const index = postagens.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Postagem não encontrada" });
  }

  postagens.splice(index, 1);
  res.status(204).send();
});

app.put("/postagem/:id", (req, res) => {
  const { id } = req.params;
  const { autorId, titulo, conteudo } = req.body;

  const autor = usuarios.find((usuario) => usuario.id === Number(autorId));
  if (!autor) {
    return res.status(400).json({ error: "Autor não encontrado" });
  }

  const index = postagens.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Postagem não encontrada" });
  }

  postagens[index] = {
    id: Number(id),
    autorId,
    titulo,
    conteudo,
  };

  res.status(200).json(postagens[index]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
