import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const CustomInputGroup = ({ label, placeholder }) => {
  return (
    <>
      <Box w="30%" pb="2">
        <Text fontSize="xs" as="b" color="gray.600">
          {label}
        </Text>
        <Input placeholder={placeholder} fontSize="sm" mt={1} />
      </Box>
    </>
  );
};
