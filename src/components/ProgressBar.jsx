import { Box, Circle, Progress, Text } from '@chakra-ui/react';
import React from 'react';

export const ProgressBar = ({
  progressVal,
  firstFilled,
  secondFilled,
  thirdFilled,
  fourthFilled,
}) => {
  return (
    <>
      <Box w={[300, 400, 500]} position="relative" h={[12, 20]}>
        <Circle
          size="40px"
          bg={firstFilled ? '#664de5' : 'white'}
          color="white"
          position="absolute"
          top="-5"
          zIndex="1"
          left="0"
          borderColor="#664de5"
          border="1px"
        >
          <Text
            color={firstFilled ? 'white.600' : 'gray.600'}
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          >
            1
          </Text>
        </Circle>
        <Circle
          size="40px"
          color="gray.300"
          bg={secondFilled ? '#664de5' : 'white'}
          position="absolute"
          top="-5"
          zIndex="1"
          left="30%"
          border="1px"
        >
          <Text
            color={secondFilled ? 'white.600' : 'gray.600'}
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          >
            2
          </Text>
        </Circle>
        <Circle
          size="40px"
          color="gray.300"
          bg={thirdFilled ? '#664de5' : 'white'}
          position="absolute"
          top="-5"
          zIndex="1"
          left="60%"
          border="1px"
        >
          <Text
            color={thirdFilled ? 'white.600' : 'gray.600'}
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          >
            3
          </Text>
        </Circle>
        <Circle
          size="40px"
          color="gray.300"
          bg={fourthFilled ? '#664de5' : 'white'}
          border="1px"
          position="absolute"
          top="-5"
          zIndex="1"
          right="0"
        >
          <Text
            color={fourthFilled ? 'white.600' : 'gray.600'}
            fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          >
            4
          </Text>
        </Circle>
        <Progress value={progressVal} height={0.45} colorScheme="purple" />
      </Box>
    </>
  );
};
