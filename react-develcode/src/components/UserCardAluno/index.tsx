import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Aluno from "../../models/aluno";
import { Container, Content } from './styles';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Add, Close } from "@mui/icons-material";

interface UserCardAlunoProps {
  aluno: Aluno;
}

const UserCardAluno: React.FC<UserCardAlunoProps> = ({aluno}) => {
  const history = useHistory();

  function handleDeleteUser() {
      api.delete(`/deletarAluno/${aluno.id}`).then(() => {
        history.push('/')
       }).catch(() => {
      alert("Erro ao cadastrar o usuário.");
    });
  }

  return (
    <Container className="user__card">
      <Content>
        <section className="user__info">
          <p className="user__id">#{aluno.id}</p>
          <p className="user__name">Nome: {aluno.nomeAluno}</p>
          <p className="user__name">CPF: {aluno.cpf}</p>
          <p className="user__name">Idade: {aluno.idade}</p>
          <p className="user__name">Responsável: {aluno.nomeResponsavel}</p>
          <p className="user__name">Valor Mensalidade: {aluno.valorMensalidade}</p>
        </section>
        <section className="user__actions">
        <ButtonGroup style={{ justifyContent: "flex-end" }}>
                <Button style={{ marginRight: "20px" }} variant="contained"  onClick={() => { history.push(`/api/atualizarAluno/${aluno.id}`) }}>
                  <Close />
                  Atualizar
                </Button>
                <Button color="error" variant="contained" onClick={handleDeleteUser} >
                  <Add />
                  Deletar
                </Button>
              </ButtonGroup>
        </section>
      </Content>
    </Container>
  );
}

export default UserCardAluno;