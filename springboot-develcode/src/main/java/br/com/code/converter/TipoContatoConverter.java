package br.com.code.converter;

import javax.persistence.Converter;

import br.com.code.Enum.TipoContato;

@Converter
public class TipoContatoConverter extends GenericEnumConverter<TipoContato>{
	public TipoContatoConverter() {
		super(TipoContato.class);
	}
}
