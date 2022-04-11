import { Flex } from '@chakra-ui/react';
import React from 'react';
import BlocksDisplay from '../components/BlocksDisplay/index.js';
import StatsBar from '../components/StatsBar.js';

const BlockExplorerView = () => {
  return (
    <Flex flexDirection="column" width="100%" pl={24}>
      <StatsBar />
      <BlocksDisplay />
    </Flex>
  );
};

export default BlockExplorerView;
