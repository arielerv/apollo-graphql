import React from 'react';
import PropTypes from 'prop-types';
import {useFormikContext} from 'formik';

import {getError} from 'utils';

import {Text} from './styled';

const MessageError = ({messageError, name, ...props}: any) => {
    const formik = name && useFormikContext();
    const formikError = formik && getError(name, formik);

    if (formikError) {
        return (
            <Text align="center" data-testid="formik-error" color="commons.danger" fontSize={14} {...props}>
                {getError('locations', formik)}
            </Text>
        );
    }
    if (messageError) {
        return (
            <Text data-testid="message-error" fontSize={14} {...props}>
                {messageError}
            </Text>
        );
    }
    return <Text align="center" data-testid="empty-text" fontSize={14} h="21px" {...props}/>;
};

MessageError.propTypes = {
    messageError: PropTypes.string,
    name: PropTypes.string
};

MessageError.defaultProps = {
    messageError: undefined,
    name: undefined
};

export default MessageError;
