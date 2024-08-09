import express from 'express';
import { MainDataSource } from './database/data-source';
import { User } from './database/entities/User';
import { EntityManager } from 'typeorm';
import { Profile } from './database/entities/Profile';

const app = express();

app.get('/', async (req, res) => {
  const tabelaUser = MainDataSource.getRepository('User');
  const user = await tabelaUser.find({
    relations: {
      profile: true, // Se a referência for nula, ele não consegue filtrar chaves.
    }
  });
  res.json(user);
});

app.get('/profile', async (req, res) => {
  const tabelaProfile = MainDataSource.getRepository('Profile');
  const newProfile = new Profile();
  newProfile.description = 'Profile description';
  tabelaProfile.save(newProfile);
  res.json(newProfile);
});

app.get('/create', (req, res) => {
  const tabelaUser = MainDataSource.getRepository('User');
  const tabelaProfile = MainDataSource.getRepository('Profile');
  const profiles = tabelaProfile.findOne({ where: { id: 1 }});
  res.json(profiles);
  const user = new User();
  user.email = 'contato@tiaogquadros.com';
  user.password = '123456';
  // user.profile = [profiles[0], profiles[1]];
  tabelaUser.save(user);
  res.json(user);
});

app.get('/update', async (req, res) => {
  const tabelaUser = MainDataSource.getRepository('User');
  const user = await tabelaUser.findOneBy({ id: 4 });
  if(!user) {
    res.json({ message: 'User not found' });
  } else {
    user.email = 'novo@tiagoquadros.com';
    user.password = '654321';
    tabelaUser.save(user);
    res.json(user);
  }
});

app.get('/delete', async (req, res) => {
  const tabelaUser = MainDataSource.getRepository('User');
  const user = await tabelaUser.findOneBy({ id: 1 });
  if(!user) {
    res.json({ message: 'User not found' });
  } else {
    tabelaUser.remove(user);
    res.json({ message: 'User deleted' });
  }
});

MainDataSource.initialize().then(async () => {
  console.log('Database connected');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((error) => {
  console.error('Error connecting to database', error);
});
