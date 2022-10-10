import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { OnboardingUI1 } from './pages/OnboardingUI1';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <OnboardingUI1 />
    </ChakraProvider>
  );
}

export default App;
