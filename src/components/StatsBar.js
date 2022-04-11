import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Stat = ({ title, value, unit }) => (
  <Box>
    <Text
      color="whiteAlpha.500"
      textTransform="uppercase"
      textAlign={['center', null, null, 'left']}
      fontSize="md"
      fontWeight={200}
    >
      {title}
    </Text>
    <Text fontSize="5xl" fontWeight={100}>
      {value}
      {unit && (
        <Text
          as="span"
          fontSize="lg"
          ml={1}
          fontWeight={100}
          color="whiteAlpha.900"
        >
          {unit}
        </Text>
      )}
    </Text>
  </Box>
);

const StatsBar = () => {
  return (
    <Box
      w="100%"
      h="auto"
      zIndex={1}
      bg="#4f468d"
      py={5}
      position={['static', null, null, 'fixed']}
    >
      <Flex
        flexDirection={['column', null, null, 'row']}
        justifyContent="space-evenly"
        alignItems={['baseline', 'center']}
        flexWrap="wrap"
      >
        <Stat title="Current Block" value="123,440" />
        <Stat title="Average Gas Price" value="87" unit="gwei" />
        <Stat title="Average Block Size" value="5.2" unit="mgas" />
        <Stat title="Average Block Fullness" value="88%" />
      </Flex>
    </Box>
  );
};

export default StatsBar;
