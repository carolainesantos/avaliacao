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

## Parte 2

# Adaptação API REST com Node e Express

Converter a estrutura de entidades e funcionalidades da atividade anterior para um banco de dados relacional e aplicando a estrutura MVC.

## Estrutura de Pastas:

src
|** api
|** config
|** controllers
|** models
|** index.js
|** package.json

- api - Representa a _View_ do MVC, onde as rotas da API REST serão definidas.
- config - Contém o arquivo de configuração do banco de dados.
- controllers - Representa o _Controller_ do MVC, onde a lógica de negócio será implementada.
- models - Representa o _Model_ do MVC, onde as entidades do banco de dados serão definidas.
- index.js - Arquivo principal da aplicação, onde o servidor será inicializado.

## Passos sugeridos:

1. Converter a estrutura de Usuário para MVC.
2. Converter a estrutura de Postagens para MVC.
3. Testar as rotas usando ferramentas como Postman ou curl.
4. Integrar as entidades no banco de dados.
5. Testar as rotas usando ferramentas como Postman ou curl e verificar o banco de dados.
6. Aplicar um middleware de validação as rotas de Postagens e as rotas de alteração, listagem e deleção de Usuários.
7. Testar as rotas usando ferramentas como Postman ou curl.
