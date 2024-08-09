import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
// Render é só o render
// screen é como se fosse o querySelector

// Mock é um conceito de emular um comportamento de uma função.
const fakeResponse = [
  {
      id: "001",
      name: "Brasil de Pelotas"
  },
  {
      id: "002",
      name: "São Paulo"
  }
];

const fakeTeam = {
  _id: "66b517c10c4af28337368d19",
  name: "Brasil de Pelotas",
  foundationYear: 2000,
  state: "RS",
  __v: 0
};

beforeEach(() => {
  vi.spyOn(global, 'fetch').mockImplementation((url: string) => {
    if (url.endsWith('api/')) {
      return Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
      } as Response);
    } else if (url.endsWith('/api/teams/001')) {
      return Promise.resolve({
        json: () => Promise.resolve(fakeTeam)
      } as Response);
    }
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App', () => {
  it('Verificou o Título', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    screen.getByText('Lista de Times');
  });

  it('Verificar a lista de times', async () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    await screen.findByText('Brasil de Pelotas'); // Travado até concluir
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe('Brasil de Pelotas');
  });

  it('Acessar um time', async () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    const link = await screen.findByText('Brasil de Pelotas');
    await userEvent.click(link);
    // Aconteceu sem me avisar.
    expect(window.location.pathname).toBe('/team/001');
    screen.getByText('Brasil de Pelotas');
    screen.getByText('Ano de Fundação: 2000');
    screen.getByText('Estado: RS');
  });
});