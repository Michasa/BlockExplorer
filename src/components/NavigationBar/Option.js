import { Button, Text } from '@chakra-ui/react';
import React from 'react';

const Option = ({ title, icon, isActive }) => {
  return (
    <Button
      display="flex"
      h={24}
      aria-label={title}
      justifyContent="center"
      flexDirection="column"
      variant="ghost"
      isFullWidth
      borderRadius="0"
      isActive={isActive}
      _hover={{
        bg: 'brand.purpleDark',
      }}
      _active={{
        bg: 'brand.purpleDark',
      }}
    >
      {icon}
      <Text pt={3.5}>{title}</Text>
    </Button>
  );
};

export default Option;
