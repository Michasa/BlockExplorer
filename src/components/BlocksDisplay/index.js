import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BlockCard from './BlockCard';
import '../../styles/index.scss';
import GenerateCardButton from './GenerateCardButton';

const BlocksDisplay = () => {
  return (
    <Box pl={[0, null, null, '48px']} pt={[0, null, null, '130px']}>
      <Flex
        className="block-container"
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        justifyContent="center"
        flexWrap="wrap"
      >
        <GenerateCardButton />
        <BlockCard blockNumber={500} transactions={1} time="10s ago" />{' '}
        <BlockCard blockNumber={500} transactions={50} time="10s ago" />
        <BlockCard blockNumber={500} transactions={150} time="10s ago" />
        <BlockCard blockNumber={500} transactions={78} time="10s ago" />
      </Flex>
    </Box>
  );
};

export default BlocksDisplay;
