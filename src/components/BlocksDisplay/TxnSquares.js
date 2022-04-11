import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const TxnSquare = ({ index, blockNumber }) => {
  return (
    <Center key={index} position="relative" m="1px" w={5} h={5} mx={0.5}>
      <Box
        className="transaction-square"
        tabIndex={0}
        bg="whiteAlpha.500"
        w={4}
        h={4}
        m="auto"
        flex="0 0 auto"
        aria-label={`block ${blockNumber},transaction ${index}`}
        _hover={{
          bg: 'whiteAlpha.900',
          boxShadow: '0px 5px 20px 0px #0000001A',
        }}
      />
      <Box
        className="transaction-tooltip"
        display="hidden"
        zIndex={-1}
        opacity={0}
        bg="white"
        position="absolute"
        top="-12px"
        left="39px"
        color="black"
        width={0}
        height={0}
        boxShadow="0px 5px 20px 0px #0000001A"
        p="16px 11px"
        _before={{
          content: `""`,
          height: '0',
          zIndex: '-1',
          borderTop: '15px solid transparent',
          borderRight: '25px solid white',
          borderBottom: '15px solid transparent',
          position: 'absolute',
          top: 1,
          left: '-20px',
        }}
      >
        <Text>Transaction #{index + 1}</Text>
      </Box>
    </Center>
  );
};

export default TxnSquare;
