import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRouter';
import dashboardRouter from './routes/dashboardRouter';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/auth-api')
  .then(() => {
    console.log('Connected to database');
  });

app.use(express.json());

app.use(authRouter);
app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});