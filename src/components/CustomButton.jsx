import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export const CustomButton = ({ title, clickHandler }) => {
  return (
    <>
      <Box w={[300, 400, 500]} paddingTop={2}>
        <Button
          bgColor="#664de5"
          color="purple.50"
          size="md"
          width="100%"
          fontSize={{ base: '12px', md: '12px', lg: '14px' }}
          onClick={clickHandler}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};
