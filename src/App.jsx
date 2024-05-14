import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Landing Page
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </>
  );
}

export default App;
