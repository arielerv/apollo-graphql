import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 99999999999999999;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  margin: 0.5em;
  text-transform: uppercase;
  font-family: sans-serif;
  color: white;
`;

export const CloseButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  opacity: 1;
  background: #606061;
  line-height: 25px;
  position: absolute;
  right: 12px;
  text-align: center;
  top: 10px;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 1px 1px 3px #000;
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  align-items: center;
  border: none;
  cursor: pointer;
  &:hover {
    background: gainsboro;
  }
`;

export const Content = styled.div`
  margin: 20px auto;
  z-index: 99999;
  background: grey;
  position: relative;
  padding: 1rem;
  height: 100%;
  max-width: 500px;
  border-radius: 8px;
`;
