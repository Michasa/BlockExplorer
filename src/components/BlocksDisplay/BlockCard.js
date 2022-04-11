import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { Caret } from '../Icons';
import TxnSquare from './TxnSquares';

const BlockCard = ({ blockNumber, transactions, time }) => {
  const returnTxnSquares = () => {
    let displayNumber = transactions > 100 ? 100 : transactions;

    return [...Array(displayNumber)].map((txn, index) => (
      <TxnSquare index={index} blockNumber={blockNumber} />
    ));
  };

  return (
    <Flex
      className="blockCard"
      flexDir="column"
      w={276}
      h={376}
      m={6}
      bg="whiteAlpha.500"
      boxShadow="0px 5px 20px 0px #0000001A"
      _hover={{
        boxShadow: '0px 5px 20px 0px #0000008A',
      }}
    >
      <Flex
        minH={73}
        p={3.5}
        borderBottom="solid 1px #ffffff1a"
        justifyContent="center"
      >
        <Box textAlign="left">
          #{blockNumber}
          <Text color="whiteAlpha.500"> mined {time}</Text>
        </Box>
        <Box>{transactions} TXs</Box>
      </Flex>
      <Flex
        p={3.5}
        pl={5}
        h={248}
        flexWrap="wrap"
        alignContent="baseline"
        justifyContent="left"
        className="txn-container"
      >
        {returnTxnSquares()}
      </Flex>
      <Flex justifyContent="space-between" minH="32px">
        {transactions > 100 && (
          <>
            <Text
              tabIndex={0}
              borderTop="solid 1px #ffffff1a"
              textAlign="left"
              fontSize="md"
              textTransform="uppercase"
              color="whiteAlpha.500"
              width="100%"
              pt={1.5}
              pl={4}
            >
              {transactions - 100} More tx
            </Text>
            <IconButton
              aria-label="Show more transactions"
              borderRadius={0}
              bg="whiteAlpha.400"
              icon={<Caret boxSize={3} h="100%" />}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default BlockCard;
