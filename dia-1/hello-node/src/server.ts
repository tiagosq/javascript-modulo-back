import express from 'express';
import cors from 'cors';
import userRouter from './routes/usersRouter';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/users', userRouter);

// É a string de conexão com o banco de dados.
mongoose.connect('mongodb://127.0.0.1:27017/auth_db')
.then(() => console.log('Conectado ao banco de dados.'))
.catch((err: any) => console.error(err));

app.listen(PORT, () => {
  console.log('O servidor foi iniciado com sucesso.');
});