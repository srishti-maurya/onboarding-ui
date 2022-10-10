import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { HeadingAndDesc } from '../components/HeadingAndDesc';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { ProgressBar } from '../components/ProgressBar';
import { CustomButton } from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

export const OnboardingUI2 = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/step3');
  };

  return (
    <VStack>
      <ProgressBar firstFilled secondFilled progressVal={50} />
      <HeadingAndDesc
        title={`Let's set up a home for all your work`}
        desc="You can always create another workspace later."
      />
      <CustomInputGroup label="Workspace Name" placeholder="Eden" />
      <Box w={[300, 400, 500]} pb="2">
        <HStack spacing={1}>
          <Text fontSize="xs" as="b" color="gray.600" pb={2}>
            Workspace URL
          </Text>
          <Text fontSize="xs" color="gray.400" pb={2}>
            (optional)
          </Text>
        </HStack>
        <InputGroup>
          <InputLeftAddon
            children="www.eden.com/"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
            color="gray.500"
          />
          <Input
            type="web"
            placeholder="Example"
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          />
        </InputGroup>
      </Box>
      <CustomButton title="Create Workspace" clickHandler={clickHandler} />
    </VStack>
  );
};
