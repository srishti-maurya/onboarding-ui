import React from 'react';
import { LogoContainer } from '../components/LogoContainer';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { HStack, VStack } from '@chakra-ui/react';
import { IconOption } from '../components/IconOption';
import { CustomButton } from '../components/CustomButton';

export const OnboardingUI3 = () => {
  return (
    <VStack>
      <LogoContainer />
      <ProgressBar firstFilled secondFilled thirdFilled progressVal={80} />
      <HeadingAndDesc
        title="How are you planning to use Eden?"
        desc={`We'll streamline your setup experience accordingly.`}
      />
      <HStack w="30%" spacing={6}>
        <IconOption
          title="For myself"
          desc="Write better. Think more clearly. Stay organized."
          userIcon
          isSelected
        />
        <IconOption
          title="For myself"
          desc="Write better. Think more clearly. Stay organized."
          teamIcon
        />
      </HStack>
      <CustomButton title="Create Workspace" />
    </VStack>
  );
};
