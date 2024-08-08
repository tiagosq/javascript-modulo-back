import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server'; // Atualize o caminho conforme a estrutura do seu projeto
import Team from '../models/team'; // Atualize o caminho conforme a estrutura do seu projeto

// Configurar a conexão com o MongoDB para testes
beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/football_teams');
});

// Limpar o banco de dados antes de cada teste
beforeEach(async () => {
  await mongoose.connection.collections.teams.drop().catch(() => {});
});

// Fechar a conexão com o MongoDB após todos os testes
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Teams API', () => {
  it('should create a new team', async () => {
    const response = await request(app)
      .post('/api/teams')
      .send({
        name: 'Time Teste',
        foundationYear: 2024,
        state: 'SP'
      })
      .expect(201);
    
    // Verificar se a resposta tem a propriedade 'name'
    expect(response.body).toHaveProperty('name', 'Time Teste');
  });

  it('should list all teams', async () => {
    // Cria um time para garantir que haja pelo menos um time na lista
    await new Team({
      name: 'Time Teste',
      foundationYear: 2024,
      state: 'SP'
    }).save();

    const response = await request(app)
      .get('/api/')
      .expect(200);
    
    // Verificar se a resposta é um array
    expect(response.body).toBeInstanceOf(Array);
    // Verificar se a resposta contém o time criado
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name', 'Time Teste');
  });

  it('should get a team by id', async () => {
    const team = new Team({
      name: 'Time Teste',
      foundationYear: 2024,
      state: 'SP'
    });

    const savedTeam = await team.save();

    const response = await request(app)
      .get(`/api/teams/${savedTeam._id}`)
      .expect(200);
    
    // Verificar se a resposta contém o time correto
    expect(response.body).toHaveProperty('name', 'Time Teste');
  });

  it('should return 404 for non-existent team', async () => {
    await request(app)
      .get('/api/teams/invalidid')
      .expect(404);
  });

  it('should update a team', async () => {
    const team = new Team({
      name: 'Time Teste',
      foundationYear: 2024,
      state: 'SP'
    });

    const savedTeam = await team.save();

    const response = await request(app)
      .patch(`/api/teams/${savedTeam._id}`)
      .send({
        name: 'Time Teste Atualizado',
        foundationYear: 2025,
        state: 'RJ'
      })
      .expect(200);
    
    // Verificar se a resposta contém as novas informações
    expect(response.body).toHaveProperty('name', 'Time Teste Atualizado');
  });

  it('should return 404 for update of non-existent team', async () => {
    await request(app)
      .patch('/api/teams/invalidid')
      .send({
        name: 'Time Teste Atualizado'
      })
      .expect(404);
  });

  it('should delete a team', async () => {
    const team = new Team({
      name: 'Time Teste',
      foundationYear: 2024,
      state: 'SP'
    });

    const savedTeam = await team.save();

    const response = await request(app)
      .delete(`/api/teams/${savedTeam._id}`)
      .expect(200);
    
    // Verificar se a resposta contém a mensagem de sucesso
    expect(response.body).toHaveProperty('message', 'Team deleted successfully');
  });

  it('should return 404 for delete of non-existent team', async () => {
    await request(app)
      .delete('/api/teams/invalidid')
      .expect(404);
  });
});
