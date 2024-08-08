# API Express
*Atividade criada por Tiago Quadros*

## Objetivo
Neste exercício, você criará uma API básica utilizando Express para aprender sobre rotas, tratamento de erros e redirecionamentos, sem o uso de middlewares.

![Exemplo da nossa API](api-express.png)

## Habilidades Esperadas
- Compreender o funcionamento das rotas no Express
- Implementar tratamento de erros, incluindo erros 404
- Realizar redirecionamentos de rotas

## Como entregar a atividade?
As atividades devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Criar a estrutura inicial.
Você precisará configurar um projeto Express básico. Crie um arquivo `index.js` e um arquivo `package.json` com as dependências necessárias (Express).

**Dica:** Use `npm init` para criar o `package.json` e `npm install express` para instalar o Express.

### 2 - Uma rota para a raiz (`/`)
A rota deve usar o metodo GET e retornar uma mensagem de boas-vindas.
**Dica:** Utilize `app.get('/caminho', (req, res) => { /* resposta */ })` para definir suas rotas.

### 3 - Uma rota para (`/sobre`)
A rota deve usar o método GET e retornar informações sobre a API.
**Dica:** Utilize `app.get('/caminho', (req, res) => { /* resposta */ })` para definir suas rotas.

### 4 - Uma rota para (`/contato`)
A rota deve usar o método GET e retornar informações de contato.
**Dica:** Utilize `app.get('/caminho', (req, res) => { /* resposta */ })` para definir suas rotas.

### 5 - Defina a porta da API com uma variável de ambiente
A porta da API deve ser definida por uma variável de ambiente. Caso não seja definida, a porta padrão deve ser a 3000.