import { Link } from 'react-router-dom';

import Navigator from '../../components/Navigator';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Navigator />
      <Content>
        <div className="dashboard__title">
          <h1 >Menu Principal</h1>
        </div>
        <main className="dashboard__description">
          <p className="description">
           Sistema de cadastro de Alunos e Professores, com chamada em springboot para as validações, usando banco de dados postgreSQL para persistencia dos campos.
          </p>
          <section className="dashboard__options" style={{justifyContent: "center", paddingTop: "50px"}}>
            <Link className="option" to="/api/visualizarProfessor" >Listagem de Professores</Link>
            <Link className="option" to="/api/visualizarAluno">Listagem de Alunos</Link>
          </section>
         
        </main>
      </Content>
    </Container>
  );
}
