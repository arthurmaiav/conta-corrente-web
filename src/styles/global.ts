import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #E3E4EB;
    color: #2f2f33;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: #E02B57;
  }
  button {
    cursor: pointer;
  }
`;