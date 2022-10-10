import { Center, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.png';

export const LogoContainer = () => {
  return (
    <>
      <Center my={['12%', '8%', '6%', '5%']}>
        <Image boxSize="32px" objectFit="cover" src={logo} alt="logo" />
        <Text fontSize="3xl" as="b" marginLeft={2}>
          Eden
        </Text>
      </Center>
    </>
  );
};
