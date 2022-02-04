import api from "./api";

export default class APIDataService {
  findProfessoresAll() {
    return api.get("/professores");
  }

  findByProfessorId(id: number) {
    return api.get(`/visualizarProfessor/${id}`);
  }

  salvarProfessor(nomeProfessor: string, rg?: string, cpf?: string, materia?: string, instituicao?: string, salario?: string) {
    return api.post("/salvarProfessor", { nomeProfessor, rg, cpf, materia, instituicao, salario });
  }

  updateProfessorById(id: number, nomeProfessor: string, rg?: string, cpf?: string, materia?: string, instituicao?: string, salario?: string) {
    return api.put(`/atualizarProfessor/${id}`, { nomeProfessor, rg, cpf, materia, instituicao, salario });
  }

  deleteProfessorById(id: number) {
    return api.delete(`/deletarProfessor/${id}`);
  }

  deleteProfessorAll() {
    return api.delete("/deletarProfessores");
  }

   findAlunosAll() {
    return api.get("/alunos");
  }

  findByAlunoId(id: number) {
    return api.get(`/visualizarProfessor/${id}`);
  }

  salvarAluno(nomeAluno: string, cpf?: string, idade?: string, responsavel?: string, mensalidade?: string) {
    return api.post("/salvarAluno", { nomeAluno, cpf, idade, responsavel, mensalidade });
  }

  updateAlunoById(id: number, nomeAluno: string, cpf?: string, idade?: string, responsavel?: string, mensalidade?: string) {
    return api.put(`/atualizarAluno/${id}`, { nomeAluno, cpf, idade, responsavel, mensalidade });
  }

  deleteAlunoById(id: number) {
    return api.delete(`/deletarAluno/${id}`);
  }

  deleteAlunoAll() {
    return api.delete("/deletarAlunos");
  }
}