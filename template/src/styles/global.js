import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  #root > div {
    margin: auto;
    padding: 30px;
  }

  body {
    background-color: #edf5ff;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .MuiFormControl-marginNormal {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export default GlobalStyle;
