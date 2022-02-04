package br.com.code.Enum;

import br.com.code.Interface.EnumValue;

public enum TipoContato implements EnumValue{
	
	CELULAR("C", "CELULAR"),
	FIXO("F", "FIXO"),
	OUTRO("O", "OUTRO");

	private String value;

	private String description;

	private TipoContato(String value, String description) {
		this.value = value;
		this.description = description;
	}
	
	public static TipoContato tipoConviteValueOf(String value) {
		for(TipoContato tipoContato : values()) {
			if(value.equals(tipoContato.getValue())) {
				return tipoContato;
			}
		}
		return null;
	}
	
	@Override
	public String getValue() {
		return null;
	}

	@Override
	public String getDescription() {
		return null;
	}
	
}
