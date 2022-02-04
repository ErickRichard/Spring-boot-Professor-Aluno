package br.com.code.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.code.dao.ProfessorRepository;
import br.com.code.model.Professor;

@Service
public class ProfessorService {

	@Autowired
	private ProfessorRepository repository;

	public void saveProfessor(Professor professor) {
		repository.save(professor);
	}

	public void atualizarProfessor(Optional<Professor> pessoaData, Professor professor) {
		Professor _professor = pessoaData.get();
		_professor.setId(pessoaData.get().getId());
		_professor.setNomeProfessor(professor.getNomeProfessor());
		_professor.setRg(professor.getRg());
		_professor.setCpf(professor.getCpf());
		_professor.setMateria(professor.getMateria());
		_professor.setInstituicao(professor.getInstituicao());
		_professor.setSalario(professor.getSalario());
		repository.save(_professor);
	}

	public List<Professor> getProfessores() {
		return repository.findAll();
	}

	public List<Professor> removeProfessor(Long id) {
		repository.deleteById(id);
		return repository.findAll();
	}

	public void removeTodosProfessores() {
		repository.deleteAll();
	}

	public Professor getProfessor(Long id) {
		return repository.findById(id).orElse(null);
	}

	public Optional<Professor> getProfessorOptional(Long id) {
		return Optional.ofNullable(repository.findById(id).orElse(null));
	}

	
	public Optional<Professor> getProfessorOptionalId(Long id) {
		return repository.findById(id);
	}

}
