package br.com.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.code.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
