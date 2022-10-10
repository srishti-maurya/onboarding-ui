import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { PageRoutes } from './routes/PageRoutes';
import { LogoContainer } from './components/LogoContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LogoContainer />
      <PageRoutes />
    </ChakraProvider>
  );
}

export default App;
