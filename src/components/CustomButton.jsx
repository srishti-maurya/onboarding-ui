import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export const CustomButton = ({ title, clickHandler }) => {
  return (
    <>
      <Box width="30%" paddingTop={2}>
        <Button
          bgColor="#664de5"
          color="purple.50"
          size="md"
          width="100%"
          fontSize="sm"
          onClick={clickHandler}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};
