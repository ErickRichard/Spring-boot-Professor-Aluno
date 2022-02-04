import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Navigator from '../../components/Navigator';
import UserCard from '../../components/UserCard';
import Professor from '../../models/professor';
import { Container, Content } from './styles';

export default function VisualizarProfessores() {
  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    procurarProfessores();
  }, []);

  async function procurarProfessores() {
    const response = await api.get("/professores");
    if(response.data){
      setProfessor(response.data);
    }
  }

  return (
    <Container>
      <Navigator />
      <Content>
        <div className="users__title">
          <h1>Professores Cadastrados</h1>
        </div>
        {professor.map((professor: Professor) => {
          return <UserCard key={professor.id} professor={professor}/>
        })}
      </Content>
    </Container>
  );
}
