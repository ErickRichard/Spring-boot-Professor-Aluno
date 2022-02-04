package br.com.code.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.code.model.Aluno;
import br.com.code.model.Professor;
import br.com.code.service.AlunoService;
import br.com.code.service.ProfessorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cadastro")
@Api(value = "Serviço Cadastro Aluno/Professor")
public class CadastroController extends ProfessorService {

	@Autowired
	private ProfessorService professorService;
	
	@Autowired
	private AlunoService alunoService;
	
	@GetMapping("/professores")
	@ApiOperation(value = "Procurar todas os professores cadastrados")
	public ResponseEntity<List<Professor>> getTodosProfessores() {
		List<Professor> professores = new ArrayList<>();
		try {
			professores = professorService.getProfessores();
			if (professores.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(professores, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@GetMapping("/visualizarProfessor/{id}")
	@ApiOperation(value = "Procurar professor designado")
	public ResponseEntity<Professor> getProfessorPorId(@PathVariable("id") long id) {
		Optional<Professor> pessoaData = professorService.getProfessorOptional(id);
		if (pessoaData.isPresent())
			return new ResponseEntity<>(pessoaData.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/salvarProfessor")
	@ApiOperation(value = "Salvar novo Professor")
	public ResponseEntity<Professor> salvarProfessor(@RequestBody Professor professor) {
		try {
			professorService.saveProfessor(professor);
			return new ResponseEntity<>(professor, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/atualizarProfessor/{id}")
	@ApiOperation(value = "Atualizar professor")
	public ResponseEntity<Professor> atualizarProfessor(@PathVariable("id") long id, @RequestBody Professor professor) {
		
		Optional<Professor> pessoaData = professorService.getProfessorOptionalId(id);
		
		if (pessoaData.isPresent()) {
			professorService.atualizarProfessor(pessoaData, professor);
			return new ResponseEntity<>(professor, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(professor, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletarProfessor/{id}")
	@ApiOperation(value = "Remover professor designada")
	public ResponseEntity<HttpStatus> deletarProfessor(@PathVariable("id") long id) {
		try {
			professorService.removeProfessor(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/deletarProfessores")
	@ApiOperation(value = "Remover todas os professores")
	public ResponseEntity<HttpStatus> deletarProfessores() {
		try {
			professorService.removeTodosProfessores();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/alunos")
	@ApiOperation(value = "Procurar todas os alunos cadastrados")
	public ResponseEntity<List<Aluno>> getTodasAlunos() {
		List<Aluno> alunos = new ArrayList<>();
		try {
			alunos = alunoService.getAlunos();
			if (alunos.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(alunos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@GetMapping("/visualizarAluno/{id}")
	@ApiOperation(value = "Procurar alunos designado")
	public ResponseEntity<Aluno> getAlunoPorId(@PathVariable("id") long id) {
		Optional<Aluno> alunoData = alunoService.getAlunoOptional(id);
		if (alunoData.isPresent())
			return new ResponseEntity<>(alunoData.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/salvarAluno")
	@ApiOperation(value = "Salvar novo Aluno")
	public ResponseEntity<Aluno> salvarAluno(@RequestBody Aluno aluno) {
		try {
			alunoService.saveAluno(aluno);
			return new ResponseEntity<>(aluno, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/atualizarAluno/{id}")
	@ApiOperation(value = "Atualizar aluno")
	public ResponseEntity<Aluno> atualizarAluno(@PathVariable("id") long id, @RequestBody Aluno aluno) {
		Optional<Aluno> pessoaData = alunoService.getAlunoOptional(id);
		if (pessoaData.isPresent()) {
			alunoService.atualizarAluno(aluno);
			return new ResponseEntity<>(aluno, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(aluno, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletarAluno/{id}")
	@ApiOperation(value = "Remover aluno designado")
	public ResponseEntity<HttpStatus> deletarAluno(@PathVariable("id") long id) {
		try {
			alunoService.removeAluno(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/deletarAlunos")
	@ApiOperation(value = "Remover todas os alunos")
	public ResponseEntity<HttpStatus> deletarAlunos() {
		try {
			alunoService.removeTodosProfessores();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
