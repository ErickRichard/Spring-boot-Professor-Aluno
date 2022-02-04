package br.com.code.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.code.dao.AlunoRepository;
import br.com.code.model.Aluno;

@Service
public class AlunoService {

	@Autowired
	private AlunoRepository repository;

	public void saveAluno(Aluno aluno) {
		repository.save(aluno);
	}

	public void atualizarAluno(Aluno aluno) {
		repository.save(aluno);
	}

	public List<Aluno> getAlunos() {
		return repository.findAll();
	}

	public List<Aluno> removeAluno(Long id) {
		repository.deleteById(id);
		return repository.findAll();
	}

	public void removeTodosProfessores() {
		repository.deleteAll();
	}

	public Aluno getAluno(Long id) {
		return repository.findById(id).orElse(null);
	}

	public Optional<Aluno> getAlunoOptional(Long id) {
		return Optional.ofNullable(repository.findById(id).orElse(null));
	}

}
