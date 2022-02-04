import { Container, Paper } from "@material-ui/core";
import { Add, Close } from "@mui/icons-material";
import { ButtonGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigator from '../../components/Navigator';
import Section from '../../components/Section';
import api from '../../services/api';

export default function CriarAluno() {

  const history = useHistory();
  const [nomeAluno, setNomeAluno] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [nomeResponsavel, setNomeResponsavel] = useState<string>("");
  const [valorMensalidade, setValorMensalidade] = useState<string>("");

  const salvarPessoa = (): void => {
    api.post("/salvarAluno", { nomeAluno, cpf, idade, nomeResponsavel, valorMensalidade }).then(() => {
      alert("Aluno cadstrado com Sucesso");
      history.push("/api/visualizarAluno");
    }).catch(() => {
      alert("Erro ao cadastrar o usuário.");
    });
  }

  return (
    <div className="cadAluno">
      <Navigator />
      <Container style={{ margin: "20px auto", padding: "50px 20px", display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
        <Paper elevation={3} style={{ padding: "50px 20px", width: 600, margin: "20px auto" }}>
          <Section title="Cadastrar Aluno">
            <TextField
              multiline
              id="nome"
              label="Nome Aluno"
              variant="outlined"
              value={nomeAluno}
              onChange={(e) => {
                setNomeAluno(e.target.value);
              }}
              fullWidth
              inputProps={{ maxLength: 100 }}
              style={{ paddingBottom: "10px" }}
               InputLabelProps={{
                shrink: true,
              }}
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
              id="idade"
              label="Idade"
              variant="outlined"
              value={idade}
              inputProps={{ maxLength: 11 }}
              onChange={(e) => {
                if (e.target.value < "0") {
                  setIdade("");
                } else {
                  setIdade(e.target.value);
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
              id="responsavel"
              label="Responsavel"
              variant="outlined"
              value={nomeResponsavel}
              onChange={(e) => {
                setNomeResponsavel(e.target.value);
              }}
              fullWidth
              inputProps={{ maxLength: 100 }}
              style={{ paddingBottom: "10px" }}
               InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
                id="mensalidade"
                label="Mensalidade"
                variant="outlined"
                value={valorMensalidade}
                onChange={(e) => {
                  if (e.target.value < "0") {
                    setValorMensalidade("");
                  } else {
                    setValorMensalidade(e.target.value);
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
                <Button style={{ marginRight: "20px" }} color="error" variant="contained" onClick={() => { history.push('/api/visualizarAluno') }}>
                  <Close />
                  Cancelar
                </Button>
                <Button color="primary" variant="contained" onClick={salvarPessoa} >
                  <Add />
                  Incluir
                </Button>
              </ButtonGroup>
            </div>
          </Section>
        </Paper>
      </Container>
    </div >
  );
}