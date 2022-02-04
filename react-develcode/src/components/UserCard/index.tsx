import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Professor from "../../models/professor";
import { Container, Content } from './styles';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Add, Close } from "@mui/icons-material";

interface UserCardProps {
  professor: Professor;
}

const UserCard: React.FC<UserCardProps> = ({professor}) => {
  const history = useHistory();

  function handleDeleteUser() {
      api.delete(`/deletarProfessor/${professor.id}`).then(() => {
        history.push('/')
       }).catch(() => {
      alert("Erro ao cadastrar o usuário.");
    });
  }

  return (
    <Container className="user__card">
      <Content>
        <section className="user__info">
          <p className="user__id">#{professor.id}</p>
          <p className="user__name">Nome Professor: {professor.nomeProfessor}</p>
          <p className="user__name">RG: {professor.rg}</p>
          <p className="user__name">CPF: {professor.cpf}</p>
          <p className="user__name">Matéria: {professor.materia}</p>
          <p className="user__name">Instituição Ensino: {professor.instituicao}</p>
        </section>
        <section className="user__actions">
        <ButtonGroup style={{ justifyContent: "flex-end" }}>
                <Button style={{ marginRight: "20px" }} variant="contained"  onClick={() => { history.push(`/api/atualizarProfessor/${professor.id}`) }}>
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

export default UserCard;