import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 25px;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: white;
  border: none;
  border-radius: calc(0.5 * 44px);
  color: dimgrey;
  font-family: inherit;
  font-size: 18px;
  outline: none;
  padding-inline-end: 44px;
  padding-inline-start: 52px;
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 50px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
`;

export const SearchButton = styled.button`
  margin-left: 20px;
  background-color: dimgrey;
  border: none;
  border-radius: calc(0.5 * 44px);
  color: white;
  font-family: inherit;
  font-size: 18px;
  outline: none;
  padding: 0 20px;
  height: 50px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  cursor: pointer;
`;
