import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Team = {
  id: string;
  name: string;
  foundationYear: number;
  state: string;
};

function TeamDetails() {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    // Substitua esta URL pela URL da sua API
    fetch(`http://localhost:3000/api/teams/${id}`)
      .then((response) => response.json())
      .then((data) => setTeam(data))
      .catch((error) => console.error('Erro ao buscar detalhes do time:', error));
  }, [id]);

  return (
    <div>
      {team ? (
        <div>
          <h1>{team.name}</h1>
          <p>Ano de Fundação: {team.foundationYear}</p>
          <p>Estado: {team.state}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default TeamDetails