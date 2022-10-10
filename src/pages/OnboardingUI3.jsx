import React from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { HStack, VStack } from '@chakra-ui/react';
import { IconOption } from '../components/IconOption';
import { CustomButton } from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

export const OnboardingUI3 = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/step4');
  };

  return (
    <VStack>
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
      <CustomButton title="Create Workspace" clickHandler={clickHandler} />
    </VStack>
  );
};
