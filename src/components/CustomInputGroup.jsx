import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const CustomInputGroup = ({ label, placeholder }) => {
  return (
    <>
      <Box w={[300, 400, 500]} pb="2">
        <Text fontSize="xs" as="b" color="gray.600">
          {label}
        </Text>
        <Input
          placeholder={placeholder}
          fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          mt={1}
        />
      </Box>
    </>
  );
};
