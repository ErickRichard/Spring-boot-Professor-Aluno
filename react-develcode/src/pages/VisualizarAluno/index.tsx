import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Navigator from '../../components/Navigator';
import UserCardAluno from '../../components/UserCardAluno';
import Aluno from '../../models/aluno';
import { Container, Content } from './styles';

export default function VisualizarAluno() {
  const [aluno, setAluno] = useState([]);

  useEffect(() => {
    procurarProfessores();
  }, []);

  async function procurarProfessores() {
    const response = await api.get("/alunos");
    if(response.data){
      setAluno(response.data);
    }
  }

  return (
    <Container>
      <Navigator />
      <Content>
        <div className="users__title">
          <h1>Alunos Cadastrados</h1>
        </div>
        {aluno.map((aluno: Aluno) => {
          return <UserCardAluno key={aluno.id} aluno={aluno}/>
        })}
      </Content>
    </Container>
  );
}
