import styled from 'styled-components';

export const Card = styled.div.attrs({role: 'button'})`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ffff;
  box-shadow: 0 5px 10px -3px rgb(0 0 0 / 50%);
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 1.953rem;
  margin: 16px 0;
`;

export const DescriptionContainer = styled.div`
  height: 100%;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: grey;
`;

export const Price = styled.p`
  font-size: 0.9rem;
  color: grey;
  margin: 0 10px 1rem 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;


