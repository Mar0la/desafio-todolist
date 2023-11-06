import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles";
import theme from './styles/theme'

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Element with ID 'root' not found in the DOM.");
}
