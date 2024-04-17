# Atividade Avaliativa 📍

## Parte 1

Criação de uma API REST com Node e Express
Entidades:

Usuário: Representa um usuário da aplicação.
Atributos: id, nome, email
Postagem: Representa uma postagem feita por um usuário.
Atributos: id, título, conteúdo, autorId (referenciando o id do usuário que criou a postagem)
Funcionalidades:

Criar, atualizar, visualizar e excluir usuários.
Criar, atualizar, visualizar e excluir postagens.
Listar todas as postagens de um usuário específico.
Passos sugeridos:

Configurar um projeto Node.js e instalar o Express.

Definir rotas para cada funcionalidade da API (CRUD para usuários e postagens).

Implementar controladores para lidar com as solicitações HTTP e interagir com as entidades em memória.

Testar as rotas usando ferramentas como Postman ou curl.

Observações:

Use uma abordagem simples para armazenar temporariamente os dados em memória, como um array ou objeto JavaScript.
Simule a geração de IDs únicos para as entidades.
Ao criar ou atualizar uma postagem, verifique se o autorId é válido, ou seja, se refere a um usuário existente.
Use os métodos HTTP corretos para cada tipo de operação (GET, POST, PUT, DELETE).

# Adaptação API REST com Node e Express 📍

## Parte 2

Converter a estrutura de entidades e funcionalidades da atividade anterior para um banco de dados relacional e aplicando a estrutura MVC.

Estrutura de Pastas:
src |** api |** config |** controllers |** models |** index.js |** package.json

• api - Representa a View do MVC, onde as rotas da API REST serão definidas.

• config - Contém o arquivo de configuração do banco de dados.

• controllers - Representa o Controller do MVC, onde a lógica de negócio será implementada.

• models - Representa o Model do MVC, onde as entidades do banco de dados serão definidas.

• index.js - Arquivo principal da aplicação, onde o servidor será inicializado.

⟫ Passos sugeridos:

→ Converter a estrutura de Usuário para MVC.<br/>
→ Converter a estrutura de Postagens para MVC.<br/>
→ Testar as rotas usando ferramentas como Postman ou curl.<br/>
→ Integrar as entidades no banco de dados.<br/>
→ Testar as rotas usando ferramentas como Postman ou curl e verificar o banco de dados.<br/>
→ Aplicar um middleware de validação as rotas de Postagens e as rotas de alteração, listagem e deleção de Usuários.<br/>
→ Testar as rotas usando ferramentas como Postman ou curl.
