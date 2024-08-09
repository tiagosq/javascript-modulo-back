import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

type Team = {
  id: string;
  name: string;
};

function Home() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Substitua esta URL pela URL da sua API
    fetch('http://localhost:3000/api/')
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Erro ao buscar times:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Times</h1>
      <ul>
        {teams.map((team) => (
          <p key={team.id}>
            <Link  to={`/team/${team.id}`}>{team.name}</Link>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Home