import React from 'react';
import { Container } from './styles';

function Centered({ children, column = false }) {
  return <Container column={column}>{children}</Container>;
}

export default Centered;
