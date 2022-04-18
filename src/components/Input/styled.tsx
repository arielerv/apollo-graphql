import styled from 'styled-components';
import {Field} from 'formik';

export const StyledInput = styled(Field).attrs(({$isFormik, type}) => ({
    as: $isFormik ? Field : 'input',
    type: type || 'input'
}))`
  box-shadow: 0 0 0 1px grey !important;
  background: white;
  height: 40px;
  opacity: 1;
  overflow-y: hidden;
  color: dimgray;
  display: flex;
  font-family: Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0.01px;
  resize: none;
  line-height: 1.5;
  width: 100%;
  border: 2px solid ${({isInvalid}) => isInvalid ? 'red !important' : 'grey'};
  border-radius: 5px;
  padding: 12px 13px;
  font-size: 16px;

  &:-webkit-autofill::first-line {
    font-size: 1rem;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: white;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: white;
    opacity: 1;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: white;
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ffffff66;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.4);
  }

  ::placeholder {
    /* Most modern browsers support this now. */
    color: #ffffff66;
    font-size: 15px;
  }
;

  &:active,
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid dimgray;
  }
`;

export const InputRightElement = styled.div`
    position: fixed;
    ${({placement}: {placement: string}) => {
    if(placement === 'left') {
        return {left: '5px'};
    }
    if(placement === 'right') {
        return {right: '5px'};
    }
}}
`;
