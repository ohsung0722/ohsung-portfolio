import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.font};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  a:hover { text-decoration: underline; }
  img { max-width: 100%; display: block; }
  button, input, textarea { font: inherit; }
`;
