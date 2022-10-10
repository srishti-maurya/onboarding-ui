import React from 'react';
import { RiUserFill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { Box, Text, VStack } from '@chakra-ui/react';

export const IconOption = ({ title, desc, userIcon, teamIcon, isSelected }) => {
  return (
    <>
      <VStack
        alignItems="flex-start"
        border="1px"
        borderRadius="md"
        borderColor={isSelected ? '#664de5' : 'gray.200'}
        padding={8}
      >
        {userIcon && (
          <RiUserFill size={20} color={isSelected ? '#664de5' : 'gray.600'} />
        )}
        {teamIcon && (
          <HiUserGroup size={20} color={isSelected ? '#664de5' : 'gray.600'} />
        )}
        <Box pt={2}>
          <Text fontSize="md" as="b" color="gray.600">
            {title}
          </Text>
        </Box>
        <Text fontSize="xs" color="gray.500">
          {desc}
        </Text>
      </VStack>
    </>
  );
};
