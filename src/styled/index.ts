import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
  body {
    margin: 0;
    background: darkgray;
    padding: 1em;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  *, :after, :before { box-sizing: border-box; }
`;
