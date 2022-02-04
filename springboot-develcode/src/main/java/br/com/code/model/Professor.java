package br.com.code.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "Professor")
public class Professor implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(value = "Idenficador autogerado")
	@Column(name = "id")
	private Long id;

	@ApiModelProperty(value = "Nome")
	@Column(name = "nomeProfessor")
	private String nomeProfessor;

	@ApiModelProperty(value = "RG")
	@Column(name = "rg")
	private String rg;

	@ApiModelProperty(value = "CPF")
	@Column(name = "cpf")
	private String cpf;

	@ApiModelProperty(value = "salario")
	@Column(name = "materia")
	private String materia;

	@ApiModelProperty(value = "salario")
	@Column(name = "instituicao")
	private String instituicao;

	@ApiModelProperty(value = "salario")
	@Column(name = "salario")
	private BigDecimal salario;

	@ApiModelProperty(value = "imagemProfessor")
	@Lob
	@Column(name = "foto")
	private byte[] imagemProfessor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeProfessor() {
		return nomeProfessor;
	}

	public void setNomeProfessor(String nomeProfessor) {
		this.nomeProfessor = nomeProfessor;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}

	public String getInstituicao() {
		return instituicao;
	}

	public void setInstituicao(String instituicao) {
		this.instituicao = instituicao;
	}

	public BigDecimal getSalario() {
		return salario;
	}

	public void setSalario(BigDecimal salario) {
		this.salario = salario;
	}

	public byte[] getImagemProfessor() {
		return imagemProfessor;
	}

	public void setImagemProfessor(byte[] imagemProfessor) {
		this.imagemProfessor = imagemProfessor;
	}

}
