import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { LogoContainer } from '../components/LogoContainer';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { CustomButton } from '../components/CustomButton';

export const OnboardingUI1 = () => {
  return (
    <VStack>
      <LogoContainer />
      <ProgressBar progressVal={20} firstFilled />
      <HeadingAndDesc
        title="Welcome! First things first..."
        desc=" You can always change them later"
      />

      <Box pb="2" w="30%">
        <Text fontSize="xs" as="b" color="gray.600">
          Full Name
        </Text>
        <Input placeholder="Steve Jobs" fontSize="sm" />
      </Box>
      <Box w="30%">
        <Text fontSize="xs" as="b" color="gray.600">
          Display Name
        </Text>
        <Input placeholder="Steve" fontSize="sm" />
      </Box>

      <CustomButton title="Create Workspace" />
    </VStack>
  );
};
