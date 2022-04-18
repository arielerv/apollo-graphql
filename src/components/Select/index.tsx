import React from 'react';
import ReactSelect from 'react-select';
import {getIn, useFormikContext, Field} from 'formik';

import {getError, getSelectedOptions, getValue} from 'utils';

import {FormLabel, FormControl} from 'styled/forms';
import MessageError from '../MessageError';
import styles from './styles';

const Select = ({
    options,
    label,
    name,
    onChange,
    value,
    placeholder,
    getOptionValue,
    getOptionLabel,
    saveName,
    onBlur,
    isDisabled,
    isFormik,
    isLoading,
    error,
    ...props
}: any) => {
    const formik = isFormik && useFormikContext();
    const selectedValue = isFormik ? getIn(formik.values, name) : getValue(value);
    const selectedOptions = getSelectedOptions(options, selectedValue, getOptionValue);

    const handleChange = (newValue: {label: string | number}) => {
        if (isFormik) {
            if (saveName) {
                formik.setFieldValue(`${name}Name`, newValue.label);
            }
            if (Array.isArray(newValue) ? newValue?.length : newValue) {
                formik.setFieldTouched(name);
            }
        }

        const valueOptions = Array.isArray(newValue)
            ? newValue.map(option => getOptionValue(option))
            : getOptionValue(newValue);
        return onChange
            ? onChange({target: {id: name, value: valueOptions}})
            : formik.handleChange({target: {id: name, value: valueOptions}});
    };

    const getSelect = (form?: never) => (
        <>
            <FormControl data-testid={`form-control-${name}`}>
                {label && <FormLabel htmlFor={name} data-testid={`form-label-${name}`} hidden={!label}>
                    {label || name}
                </FormLabel>}
                <ReactSelect
                    name={name}
                    inputId={name}
                    options={options}
                    placeholder={placeholder}
                    isLoading={isLoading}
                    onChange={handleChange}
                    getOptionLabel={getOptionLabel}
                    getOptionValue={getOptionValue}
                    value={selectedOptions}
                    onBlur={() => onBlur && onBlur({target: {id: name, value: selectedValue}})}
                    isClearable
                    isDisabled={isDisabled}
                    loadingMessage={() => 'Cargando..'}
                    noOptionsMessage={() => 'No hay resultados.'}
                    styles={styles((form && getError(name, form)) || !!error)}
                    maxMenuHeight={150}
                    {...props}
                />
                <MessageError name={name} messageError={error}/>
            </FormControl>
        </>
    );

    return (
        isFormik ? (
            <Field name={name}>
                {({form}: never) => getSelect(form)}
            </Field>
        ) : getSelect()
    );
};

export default Select;
