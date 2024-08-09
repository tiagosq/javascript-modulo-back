import mongoose from "mongoose";
import request from "supertest";
import app from "../server";

// É executada antes de tudo. Uma única vez.
beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/football_teams');
});

afterAll(async () => {
  await mongoose.connection.close();
})

// É executada antes de cada teste.
beforeEach(() => {
  // console.log('Vai começar');
});

// É executada após cada teste.
afterEach(() => {
  // console.log('Terminou');
});

// Um grupo de testes
describe('Listagem', () => {
  it('Retorna todos os times', async () => {
    const times = await request(app)
      .get('/api')
      .expect(200);
    
    expect(times.body.length).toEqual(3);
    expect(times.body[0].name).toEqual('Grêmio');
  });

  it('Retorna um time específico', async () => {
    const time = await request(app)
      .get('/api/teams/66b517c10c4af28337368d19')
      .expect(200);
    
    expect(time.body.name).toEqual('Grêmio');
  });

  it('Retorna erro se o time não existe', async () => {
    const time = await request(app)
      .get('/api/teams/nao-existe')
      .expect(404);

    const error = "Cast to ObjectId failed for value \"nao-existe\" (type string) at path \"_id\" for model \"Team\"";
    expect(time.body.error).toBe(error);
  });
});

describe('Manipulações', () => {
  let timeId: string;

  it('Criar um time do zero', async () => {
    const novoTime = await request(app).post('/api/teams').send({
      name: 'Internacional',
      foundationYear: 1909,
      state: 'RS'
    }).expect(201);

    expect(novoTime.body.name).toEqual('Internacional');
    timeId = novoTime.body._id;
  });

  it('Deletar um time', async () => {
    const response = await request(app).delete(`/api/teams/${timeId}`).expect(200);
  });
});