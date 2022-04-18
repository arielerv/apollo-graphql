import styled from 'styled-components';

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
