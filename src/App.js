import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { PageRoutes } from './routes/PageRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PageRoutes />
    </ChakraProvider>
  );
}

export default App;
