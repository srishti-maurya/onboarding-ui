import { Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { ProgressBar } from '../components/ProgressBar';
import check_icon from '../assets/check_icon.png';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { CustomButton } from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

export const OnboardingUI4 = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <VStack>
      <ProgressBar
        progressVal={100}
        firstFilled
        secondFilled
        thirdFilled
        fourthFilled
      />
      <Image boxSize="80px" objectFit="cover" src={check_icon} alt="check" />
      <HeadingAndDesc
        title="Congratulations, Eren!"
        desc="You have completed onboarding, you can start using the Eden!"
      />
      <CustomButton title="Launch Eden" clickHandler={clickHandler} />
    </VStack>
  );
};
