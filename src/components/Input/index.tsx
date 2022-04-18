import React from 'react';
import {getError} from 'utils';
import {useFormikContext} from 'formik';

import {FormControl, FormLabel} from 'styled/forms';

import {InputRightElement, StyledInput} from './styled';
import MessageError from '../MessageError';

const Input = (
    {name, type, isFormik, label, isDisabled, iconLeft: IconLeft, iconRight: IconRight,error, ...props}
        : any
) => {
    const form = isFormik && useFormikContext();
    console.log({form});

    return (
        <FormControl>
            {label && <FormLabel>{label}</FormLabel>}
            {IconLeft && (
                <InputRightElement placement="left">
                    <IconLeft/>
                </InputRightElement>
            )}
            <StyledInput
                id={name}
                name={name}
                type={type}
                data-testid={`input-${name}`}
                disabled={isDisabled}
                $isFormik={isFormik}
                $isInvalid={(form && getError(name, form)) || !!error}
                {...props}
            />
            {IconRight && (
                <InputRightElement placement="right">
                    <IconRight/>
                </InputRightElement>
            )}
            <MessageError name="productVariantId"/>
        </FormControl>
    );
};

export default Input;
