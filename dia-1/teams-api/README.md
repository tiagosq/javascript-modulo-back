# Exercício: Criar uma API com MongoDB e Express

## Objetivo

Desenvolver uma API RESTful utilizando Express e MongoDB para gerenciar times de futebol, permitindo realizar operações CRUD (Criar, Ler, Atualizar e Excluir).

## Requisitos

1. **Configuração do Projeto**
   - Inicialize um novo projeto Node.js.
   - Instale as dependências necessárias para trabalhar com Express, MongoDB e TypeScript.
   - Configure o TypeScript no projeto.

2. **Configuração do Servidor Express**
   - Crie um servidor Express básico.
   - Configure a conexão com o MongoDB utilizando Mongoose.
   - Defina o middleware para analisar o corpo das requisições.

3. **Modelo de Dados**
   - Crie um modelo Mongoose para representar um time de futebol. O modelo deve incluir:
     - `name`: Nome do time (string)
     - `foundationYear`: Ano de fundação (número)
     - `state`: Estado (string)

4. **Rotas da API**
   - **POST /teams**
     - Crie um novo time.
     - A requisição deve incluir o nome do time, ano de fundação e estado.
     - A resposta deve retornar o time criado.

   - **GET /teams**
     - Liste todos os times.
     - A resposta deve incluir uma lista de times com as propriedades `id` e `name`.

   - **GET /teams/:id**
     - Obtenha um time específico pelo ID.
     - A resposta deve retornar o time com o ID especificado.

   - **PATCH /teams/:id**
     - Atualize um time existente.
     - A requisição deve incluir os novos valores para o nome, ano de fundação e estado.
     - A resposta deve retornar o time atualizado.

   - **DELETE /teams/:id**
     - Exclua um time pelo ID.
     - A resposta deve confirmar a exclusão do time.

## Passos para Implementação

1. **Inicialização do Projeto**
   - Crie um diretório para o projeto e inicialize um novo projeto Node.js.
   - Instale as bibliotecas necessárias para Express, Mongoose e TypeScript.

2. **Configuração do TypeScript**
   - Crie um arquivo de configuração para o TypeScript.

3. **Criação do Servidor Express**
   - Implemente um servidor Express básico.
   - Configure a conexão com o MongoDB usando Mongoose.
   - Adicione middleware para analisar requisições JSON.

4. **Criação do Modelo Mongoose**
   - Defina um modelo Mongoose para o time de futebol.

5. **Criação das Rotas da API**
   - Implemente rotas para criar, listar, obter, atualizar e excluir times.

6. **Executar a Aplicação**
   - Compile o TypeScript e execute a aplicação.

## Observações

- Certifique-se de que o MongoDB está em execução no seu sistema.
- A API deve estar acessível na porta configurada no servidor.
