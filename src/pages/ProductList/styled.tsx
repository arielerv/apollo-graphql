import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding-bottom: 20px;
`;

export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 300px);
  place-content: center;
  gap: 1rem;
`;

export const Text = styled.p`
  color: ghostwhite;
  font-size: 18px;
`;


