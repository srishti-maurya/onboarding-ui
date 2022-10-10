import React from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { Stack, VStack } from '@chakra-ui/react';
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
      <Stack w={[300, 400, 500]} spacing={6} direction={['column', 'row']}>
        <IconOption
          title="For myself"
          desc="Write better. Think more clearly. Stay organized."
          userIcon
          isSelected
        />
        <IconOption
          title="With my team"
          desc="Wikis, docs, tasks & projects, all in one place."
          teamIcon
        />
      </Stack>
      <CustomButton title="Create Workspace" clickHandler={clickHandler} />
    </VStack>
  );
};
