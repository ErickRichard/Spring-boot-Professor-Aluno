package br.com.code.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.code.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{

}
