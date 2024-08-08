# Auth com Express
*Atividade criada por Tiago Quadros*

## Objetivo
Nesta atividade, você criará uma API com Express que utiliza MongoDB para autenticação. A API terá duas coleções no banco de dados: uma para usuários com senhas criptografadas e outra para o histórico de logins. Implementaremos rotas de login, uma rota protegida para o dashboard e outra para recuperar o último acesso.

## Habilidades Esperadas
- Configuração e uso do MongoDB com Express
- Criptografia de senhas
- Implementação de rotas protegidas
- Gerenciamento de histórico de logins

## Como entregar a atividade?
As atividades devem ser enviadas em um arquivo zip, apenas com os seus códigos (as dependências podem ser reinstaladas apenas com o `package.json`).

[FORMULÁRIO PARA ENVIO](https://forms.gle/iJKx4yrXPouE5KpU8)

## Requisitos

### 1 - Configuração inicial
1. Crie um novo projeto Express e adicione o MongoDB como dependência.
2. Crie um arquivo `index.js` para o código principal.

**Dica:** Use `npm init -y` para criar o `package.json` e `npm install express mongoose bcryptjs jsonwebtoken` para instalar as dependências necessárias.

### 2 - Configuração do MongoDB
1. Crie duas coleções no MongoDB:
   - **Usuários**: com campos `username` (string) e `password` (string, criptografado).
   - **Histórico de Logins**: com campos `username` (string) e `loginTime` (data).

2. Conecte sua aplicação Express ao MongoDB.

**Dica:** Use `mongoose.connect('mongodb://localhost:27017/yourdbname')` para conectar ao MongoDB.

### 3 - Criar a rota de login
Implemente uma rota POST para `/login` que recebe um `username` e `password`, valida as credenciais e retorna um token JWT se o login for bem-sucedido.

**Dica:** Utilize `bcryptjs` para comparar a senha e `jsonwebtoken` para gerar o token.

### 4 - Criar a rota protegida para o dashboard
Implemente uma rota GET para `/dashboard` que só pode ser acessada se o usuário fornecer um token JWT válido no cabeçalho da requisição.

**Dica:** Use middleware para verificar o token JWT e autorizar o acesso.

### 5 - Criar a rota para registrar o login no histórico
Após um login bem-sucedido, registre a hora do login na coleção de histórico de logins.

**Dica:** Adicione uma entrada na coleção de histórico após a autenticação.

### 6 - Criar a rota protegida para o último acesso
Implemente uma rota GET para `/ultimo-acesso` que retorna o último login do usuário autenticado.

**Dica:** Recupere o último registro da coleção de histórico de logins para o usuário autenticado.

### 7 - Middleware de autenticação
Implemente um middleware para proteger as rotas, que valida o token JWT e verifica se é válido.

**Dica:** Use `jsonwebtoken.verify` para validar o token JWT no middleware.

### 8 - Estrutura de arquivos
Crie uma estrutura básica com os seguintes arquivos:
- `index.js`: configuração do Express e rotas.
- `models/user.js`: definição do modelo de usuário.
- `models/loginHistory.js`: definição do modelo de histórico de logins.
- `middleware/auth.js`: middleware de autenticação.

**Dica:** Use `mongoose.Schema` para definir os modelos de dados.