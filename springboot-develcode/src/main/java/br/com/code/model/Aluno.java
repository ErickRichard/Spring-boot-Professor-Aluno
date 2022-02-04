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
@Table(name = "Aluno")
public class Aluno implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(value = "Idenficador autogerado")
	@Column(name = "id")
	private Long id;

	@ApiModelProperty(value = "Nome")
	@Column(name = "nomeAluno")
	private String nomeAluno;

	@ApiModelProperty(value = "CPF")
	@Column(name = "cpf")
	private String cpf;

	@ApiModelProperty(value = "idade")
	@Column(name = "idade")
	private Integer idade;

	@ApiModelProperty(value = "nomeResponsavel")
	@Column(name = "nomeResponsavel")
	private String nomeResponsavel;

	@ApiModelProperty(value = "valorMensalidade")
	@Column(name = "valorMensalidade")
	private BigDecimal valorMensalidade;

	@ApiModelProperty(value = "imagemAluno")
	@Lob
	@Column(name = "foto")
	private byte[] imagemAluno;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeAluno() {
		return nomeAluno;
	}

	public void setNomeAluno(String nomeAluno) {
		this.nomeAluno = nomeAluno;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	public String getNomeResponsavel() {
		return nomeResponsavel;
	}

	public void setNomeResponsavel(String nomeResponsavel) {
		this.nomeResponsavel = nomeResponsavel;
	}

	public BigDecimal getValorMensalidade() {
		return valorMensalidade;
	}

	public void setValorMensalidade(BigDecimal valorMensalidade) {
		this.valorMensalidade = valorMensalidade;
	}

	public byte[] getImagemAluno() {
		return imagemAluno;
	}

	public void setImagemAluno(byte[] imagemAluno) {
		this.imagemAluno = imagemAluno;
	}

}
