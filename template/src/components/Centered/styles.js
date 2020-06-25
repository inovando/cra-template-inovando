import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  max-width: 1200px;
  width: 100%;

  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;
