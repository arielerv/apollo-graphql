import React, {cloneElement} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Container, CloseButton, Content, Overlay, Title} from './styled';

const CustomModal = ({isActive, children, title, handleClose,  ...props}: any) =>
    isActive
        ? ReactDOM.createPortal(
            <>
                <Overlay/> 
                <Container
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                >
                    <Content>
                        {title && (
                            <Title>
                                {title}
                                {handleClose && <CloseButton onClick={handleClose}>&times;</CloseButton>}
                            </Title>
                        )}
                        {cloneElement(children, {...props})}
                    </Content>
                </Container>
            </>,
            document.body
        )
        : null;

CustomModal.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    handleClose: PropTypes.func,
    background: PropTypes.string,
    fullPage: PropTypes.bool
};

CustomModal.defaultProps = {
    title: null,
    handleClose: null,
    isActive: false,
    background: null,
    fullPage: false
};

export default CustomModal;
