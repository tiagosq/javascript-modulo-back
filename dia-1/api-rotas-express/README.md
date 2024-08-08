# API de Usuários com Express
*Atividade criada por Tiago Quadros*

## Objetivo
Nesta atividade, você criará uma API básica utilizando Express para gerenciar usuários. A API terá funcionalidades para listar usuários, autenticar login, filtrar usuários por papel, e operações de criação, atualização e exclusão simuladas.

## Habilidades Esperadas
- Implementar rotas para listar e filtrar dados
- Criar uma rota de login e validar credenciais
- Simular operações de CRUD
- Gerenciar dados sensíveis de forma segura

## Como entregar a atividade?
As atividades devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Criar a estrutura inicial
Você precisará configurar um projeto Express básico. Crie um arquivo `index.js` e um arquivo `package.json` com as dependências necessárias (Express).

**Dica:** Use `npm init` para criar o `package.json` e `npm install express` para instalar o Express.

### 2 - Definir os dados dos usuários
Simule uma lista de usuários com os seguintes dados:

```js
const users = [
  { id: '01', email: 'user1@example.com', password: 'pass1', role: 'admin' },
  { id: '02', email: 'user2@example.com', password: 'pass2', role: 'user' },
  // Adicione mais usuários conforme necessário
];
```

### 3 - Criar a rota para listar todos os usuários
Implemente uma rota GET para /users que retorna todos os usuários, sem mostrar a senha.

Dica: Use `map` para remover a senha da resposta.

### 4 - Criar a rota de login
Implemente uma rota POST para /login que aceita um email e password no corpo da requisição e retorna uma mensagem indicando se o acesso é válido ou inválido.

Dica: Verifique as credenciais comparando com a lista de usuários e responda com uma mensagem apropriada.

### 5 - Criar a rota para filtrar usuários por papel
Implemente uma rota POST para /users/role que recebe um role no corpo da requisição e retorna todos os usuários que têm esse papel.

Dica: Filtre a lista de usuários com base no valor recebido no corpo da requisição.

### 6 - Criar a rota para retornar um usuário específico
Implemente uma rota GET para /users/:id que retorna os detalhes de um usuário específico, com base no ID fornecido na rota.

Dica: Procure o usuário na lista com o ID fornecido e retorne os detalhes.

### 7 - Criar a rota para rotas inválidas
Implemente uma rota GET para qualquer outro caminho que retorne uma mensagem de erro "Rota não encontrada."

Dica: Use app.get('*', (req, res) => { /* resposta */ }) para capturar rotas inválidas.

### 8 - Criar a rota para um falso delete de um usuário
Implemente uma rota DELETE para /users/:id que simula a exclusão de um usuário se ele existir.

Dica: Verifique se o usuário existe e responda com uma mensagem apropriada.

### 9 - Criar a rota para um falso create de um usuário
Implemente uma rota POST para /users que simula a criação de um novo usuário. Não é necessário persistir os dados; apenas retorne uma mensagem confirmando a criação.

Dica: Receba os dados do usuário no corpo da requisição e responda com uma mensagem de sucesso.

### 10 - Criar a rota para um falso update de um usuário
Implemente uma rota PATCH para /users/:id que simula a atualização de um usuário se ele existir.

Dica: Receba os dados de atualização no corpo da requisição e responda com uma mensagem de sucesso.