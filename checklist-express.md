# Checklist- Express, MongoDB e MySQL
*Atividade criada por Tiago Quadros*

## Objetivo
Este checklist serve para guiar você nas primeiras etapas para configurar Express, MongoDB ou MySQL na sua API.

# Siga os próximos passos

## Criar um Projeto com Express
- [ ] Abra seu terminal.
- [ ] Crie um novo diretório para o projeto e navegue até ele:
  ```sh
  mkdir meu-projeto && cd meu-projeto
  ```
- [ ] Inicialize um novo projeto Node.js:
  ```sh
  npm init -y
  ```
- [ ] Instale o Express:
  ```sh
  npm install express
  ```
- [ ] Crie um arquivo `index.js` e adicione a configuração básica do Express:
  ```js
  const express = require('express');
  const app = express();
  const port = 3000;

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  ```
- [ ] Inicie o servidor:
  ```sh
  node index.js
  ```
- [ ] Abra o navegador e acesse `http://localhost:3000` para verificar se a rota GET está funcionando.

## Configurar MongoDB
- [ ] Instale o MongoDB e a biblioteca Mongoose:
  ```sh
  npm install mongoose
  ```
- [ ] Conecte ao MongoDB no arquivo `index.js`:
  ```js
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/meu_banco_de_dados', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  ```

## Configurar MySQL
- [ ] Instale a biblioteca MySQL:
  ```sh
  npm install mysql
  ```
- [ ] Conecte ao MySQL no arquivo `index.js`:
  ```js
  const mysql = require('mysql');

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'meu_banco_de_dados'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  ```

## Operações CRUD com MongoDB
### Criar
- [ ] Defina um modelo Mongoose:
  ```js
  const Schema = mongoose.Schema;

  const ItemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
  });

  const Item = mongoose.model('Item', ItemSchema);
  ```
- [ ] Adicione uma rota POST para criar um item:
  ```js
  app.use(express.json());

  app.post('/items', (req, res) => {
    const newItem = new Item(req.body);

    newItem.save().then((item) => {
      res.status(201).send(item);
    }).catch((err) => {
      res.status(400).send(err);
    });
  });
  ```

### Ler
- [ ] Adicione uma rota GET para ler todos os itens:
  ```js
  app.get('/items', (req, res) => {
    Item.find().then((items) => {
      res.status(200).send(items);
    }).catch((err) => {
      res.status(400).send(err);
    });
  });
  ```

### Atualizar
- [ ] Adicione uma rota PUT para atualizar um item:
  ```js
  app.put('/items/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((item) => {
      res.status(200).send(item);
    }).catch((err) => {
      res.status(400).send(err);
    });
  });
  ```

### Deletar
- [ ] Adicione uma rota DELETE para deletar um item:
  ```js
  app.delete('/items/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id).then((item) => {
      res.status(200).send(item);
    }).catch((err) => {
      res.status(400).send(err);
    });
  });
  ```

Seguindo esses passos, você terá um projeto Express configurado com MongoDB e MySQL, e operações CRUD realizadas com MongoDB.
