import styled from 'styled-components';
import {Field} from 'formik';

export const Input = styled(Field).attrs(({$isFormik, type}) => ({
    as: $isFormik ? Field : 'input',
    type: type || 'input'
}))`
  margin: 10px 0;
  opacity: 1;
  overflow-y: hidden;
  color: #fff;
  display: flex;
  font-family: 'Gentleman', Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0.01px;
  border: 1px white solid;
  border-radius: 3px;
  padding: 12px 13px;
  font-size: 13px;
  resize: none;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: transparent;
  width: 100%;
  &:hover {
    border: 1px solid lightgrey;
  }
  &:active,
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid lightgrey;
    box-shadow: none;
    outline: none;
    color: white;
  }
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
    color: #ffffff66;
  }
  ::placeholder {
    /* Most modern browsers support this now. */
    color: #ffffff66;
    font-size: 15px;
  }
`;

export const Button = styled.button.attrs(({type}) => ({type: type || 'button'}))`
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  background: darkgray;
  border-radius: 7px;
  font-family: 'Brandon Grotesque', Arial, sans-serif;
  font-size: 13px;
  line-height: 221.4%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: 100%;
  height: 39px;
  padding: 0 31px;
  border: transparent;
  transform: translate(0, 0);
  max-width: 300px;
  min-height: 39px;
  &:disabled {
    padding-left: 11px;
    padding-right: 11px;
    border-color: grey;
    cursor: not-allowed;
    filter: brightness(0.7);
    opacity: 0.9;
    background: grey;
  }
  &:active,
  :focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  color: white
`;

