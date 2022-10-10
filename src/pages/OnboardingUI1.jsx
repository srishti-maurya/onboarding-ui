import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { LogoContainer } from '../components/LogoContainer';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { CustomButton } from '../components/CustomButton';
import { CustomInputGroup } from '../components/CustomInputGroup';

export const OnboardingUI1 = () => {
  return (
    <VStack>
      <LogoContainer />
      <ProgressBar progressVal={20} firstFilled />
      <HeadingAndDesc
        title="Welcome! First things first..."
        desc=" You can always change them later"
      />
      <CustomInputGroup label="Full Name" placeholder="Steve Jobs" />
      <CustomInputGroup label="Display Name" placeholder="Steve" />
      <CustomButton title="Create Workspace" />
    </VStack>
  );
};
