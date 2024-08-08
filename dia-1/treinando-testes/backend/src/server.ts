import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import teamsRoutes from './routes/teams'

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api', teamsRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/football_teams')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;