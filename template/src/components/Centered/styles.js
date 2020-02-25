import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;
