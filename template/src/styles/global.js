import styled, { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }

  html {
    word-break: normal;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    background-color: #edf5ff;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .MuiFormControl-marginNormal {
    margin-top: 10px;
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export default GlobalStyle;
