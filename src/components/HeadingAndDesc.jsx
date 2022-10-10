import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

export const HeadingAndDesc = ({ title, desc }) => {
  return (
    <>
      <Center>
        <Box textAlign="center" mb={10}>
          <Box mb={2}>
            <Text fontSize="3xl" as="b">
              {title}
            </Text>
          </Box>
          <Text fontSize="sm" color="gray.500">
            {desc}
          </Text>
        </Box>
      </Center>
    </>
  );
};
