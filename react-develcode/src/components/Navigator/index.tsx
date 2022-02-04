import { Link } from 'react-router-dom';
import { Content, Container } from './styles';

export default function Nagivator() {
  return (
    <Container>
      <Content>
        <Link className="nav__option" to="/">Principal</Link>
        <Link className="nav__option" to="/api/visualizarProfessor">Professores</Link>
        <Link className="nav__option" to="/api/visualizarAluno">Alunos</Link>

        <Link className="nav__option" to="/api/criarProfessor">Novo Professor</Link>
        <Link className="nav__option" to="/api/criarAluno">Novo Aluno</Link>
      </Content>
    </Container>
  );
}