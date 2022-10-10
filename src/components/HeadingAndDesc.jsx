import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

export const HeadingAndDesc = ({ title, desc }) => {
  return (
    <>
      <Center>
        <Box textAlign="center" mb={10} w={[300, 400, 500]}>
          <Box mb={2}>
            <Text fontSize={{ base: '24px', md: '26px', lg: '28px' }} as="b">
              {title}
            </Text>
          </Box>
          <Text color="gray.500">{desc}</Text>
        </Box>
      </Center>
    </>
  );
};
