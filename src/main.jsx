import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#0f0f0f',
    }
  },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
