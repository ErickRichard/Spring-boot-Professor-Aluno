import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Paper } from "@material-ui/core";
import { Add, Close } from "@mui/icons-material";
import { ButtonGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Navigator from '../../components/Navigator';
import Section from '../../components/Section';
import api from '../../services/api';

export default function AtualizarAluno() {
  const history = useHistory();
  let { id } = useParams<Record<string, string | undefined>>();

  const [nomeProfessor, setNomeProfessor] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [materia, setMateria] = useState<string>("");
  const [instituicao, setInstituicao] = useState<string>("");
  const [salario, setSalario] = useState<string>("");

  function handleUpdateUser(e: FormEvent) {
    e.preventDefault();

    api.put(`/atualizarProfessor/${id}`, { nomeProfessor, rg, cpf, materia, instituicao, salario }).then(() => {
      alert("Usuário atualizado com Sucesso");
      history.push("/api/visualizarProfessor");
    }).catch(() => {
      alert("Erro ao atualizar o usuário.");
    });
  }

  async function procurarProfessorPorId() {
    const response = await api.get(`/visualizarProfessor/${id}`);
    if(response.data){
      setNomeProfessor(response.data.nomeProfessor);
      setRg(response.data.rg);
      setCpf(response.data.cpf);
      setMateria(response.data.materia);
      setInstituicao(response.data.instituicao);
      setSalario(response.data.salario);
    }
  }

  useEffect(() => {
    procurarProfessorPorId();
  }, []);

  return (
    <div className="cadatroProfessorAluno">
      <Navigator />
      <Container style={{ margin: "20px auto", padding: "50px 20px", display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
        <Paper elevation={3} style={{ padding: "50px 20px", width: 600, margin: "20px auto" }}>
          <Section title="Atualizar Professores">
            <TextField
              multiline
              id="nome"
              label="Nome Professor"
              variant="outlined"
              value={nomeProfessor}
              onChange={(e) => {
                setNomeProfessor(e.target.value);
              }}
              fullWidth
              inputProps={{ maxLength: 100 }}
              style={{ paddingBottom: "10px" }}
               InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="rg"
              label="RG"
              value={rg}
              onChange={(e) => {
                if (e.target.value < "0") {
                  setRg("");
                } else {
                  setRg(e.target.value);
                }
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              style={{ paddingBottom: "10px" }}
            />
            <TextField
              id="cpf"
              label="CPF"
              variant="outlined"
              value={cpf}
              inputProps={{ maxLength: 11 }}
              onChange={(e) => {
                if (e.target.value < "0") {
                  setCpf("");
                } else {
                  setCpf(e.target.value);
                }
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              style={{ paddingBottom: "10px" }}
            />
             <TextField
              multiline
              id="nome"
              label="Matéria"
              variant="outlined"
              value={materia}
              onChange={(e) => {
                setMateria(e.target.value);
              }}
              fullWidth
              inputProps={{ maxLength: 100 }}
              style={{ paddingBottom: "10px" }}
               InputLabelProps={{
                shrink: true,
              }}
            />
             <TextField
              multiline
              id="nome"
              label="instituicão"
              variant="outlined"
              value={instituicao}
              onChange={(e) => {
                setInstituicao(e.target.value);
              }}
              fullWidth
              inputProps={{ maxLength: 100 }}
              style={{ paddingBottom: "10px" }}
               InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
                id="salário"
                label="Salário"
                variant="outlined"
                value={salario}
                onChange={(e) => {
                  if (e.target.value < "0") {
                    setSalario("");
                  } else {
                    setSalario(e.target.value);
                  }
                }}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                style={{ paddingBottom: "10px" }}
              />
              
            <div style={{ justifyContent: "space-between" }}>
              <ButtonGroup style={{ justifyContent: "flex-end" }}>
                <Button style={{ marginRight: "20px" }} variant="text" onClick={() => { history.push('/api/visualizarAluno') }}>
                  <Close />
                  Cancelar
                </Button>
                <Button color="secondary" variant="text" onClick={handleUpdateUser} >
                  <Add />
                  Atualizar
                </Button>
              </ButtonGroup>
            </div>
          </Section>
        </Paper>
      </Container>
    </div >
  );
}