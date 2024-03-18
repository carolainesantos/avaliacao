# Criação de uma API REST com Node e Express

🧷 Entidades:

1. Usuário: Representa um usuário da aplicação.
   - Atributos: id, nome, email
2. Postagem: Representa uma postagem feita por um usuário.
   - Atributos: id, título, conteúdo, autorId (referenciando o id do usuário que criou a postagem)

🧷 Funcionalidades:

1. Criar, atualizar, visualizar e excluir usuários.✅
2. Criar, atualizar, visualizar e excluir postagens.✅
3. Listar todas as postagens de um usuário específico.✅

🔻Passos sugeridos:

1. Configurar um projeto Node.js e instalar o Express. ✅

2. Definir rotas para cada funcionalidade da API (CRUD para usuários e postagens). ✅

3. Implementar controladores para lidar com as solicitações HTTP e interagir com as entidades em memória. ✅

4. Testar as rotas usando ferramentas como Postman ou curl. ✅

🌱 Observações:

- Use uma abordagem simples para armazenar temporariamente os dados em memória, como um array ou objeto JavaScript.
- Simule a geração de IDs únicos para as entidades.
- Ao criar ou atualizar uma postagem, verifique se o autorId é válido, ou seja, se refere a um usuário existente.
- Use os métodos HTTP corretos para cada tipo de operação (GET, POST, PUT, DELETE).

📌💭 Implementações Futuras

- Adicionar integração com banco de dados.
