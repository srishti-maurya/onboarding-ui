import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { CustomButton } from '../components/CustomButton';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { useNavigate } from 'react-router-dom';

export const OnboardingUI1 = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/step2');
  };

  return (
    <VStack>
      <ProgressBar progressVal={20} firstFilled />
      <HeadingAndDesc
        title="Welcome! First things first..."
        desc=" You can always change them later"
      />
      <CustomInputGroup label="Full Name" placeholder="Steve Jobs" />
      <CustomInputGroup label="Display Name" placeholder="Steve" />
      <CustomButton title="Create Workspace" clickHandler={clickHandler} />
    </VStack>
  );
};
