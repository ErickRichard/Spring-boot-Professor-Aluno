package br.com.code.converter;

import java.util.EnumSet;

import javax.persistence.AttributeConverter;

import br.com.code.Interface.EnumValue;

public class GenericEnumConverter <E extends Enum<E> & EnumValue> implements AttributeConverter<E, String> {
	
	private Class<E> enumClass;

    public GenericEnumConverter(Class<E> enumClass) {
        this.enumClass = enumClass;
    }

    @Override
    public String convertToDatabaseColumn(E e) {
        if (e == null) {
            return null;
        }
        return e.getValue();
    }

    @Override
    public E convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }

        for (E en : EnumSet.allOf(enumClass)) {
            if (en.getValue().equalsIgnoreCase(dbData.trim())) {
                return en;
            }
        }

        throw new IllegalArgumentException("Unknown database value:" + dbData);
    }

}
