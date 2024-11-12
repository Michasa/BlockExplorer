import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { readableTime } from '../../utils/dataStandardization'
import { Caret } from '../Icons'
import TxnSquare from './TxnSquares'

const BlockCard = ({
  number,
  transactions,
  time,
  selectBlock,
  clearSelectBlock,
  selectedBlockId,
}) => {
  const returnTxnSquares = () => {
    let displayNumber = transactions > 100 ? 100 : transactions

    return [...Array(displayNumber)].map((txn, index) => (
      <TxnSquare key={`${number}${index}`} index={index} blockNumber={number} />
    ))
  }

  const returnVisibilityState = () =>
    (selectedBlockId !== null &&
      (selectedBlockId === number ? 'selected' : 'not-selected')) ||
    ''

  return (
    <Flex
      className={`blockCard ${returnVisibilityState()}`}
      flexDir="column"
      w={276}
      h={376}
      m={6}
      bg="whiteAlpha.500"
      boxShadow="0px 5px 20px 0px #0000001A"
      _hover={{
        boxShadow: '0px 5px 20px 0px #0000008A',
        transform: 'translateY(-10px)',
      }}
    >
      <Flex
        onClick={() => {
          selectedBlockId === number ? clearSelectBlock() : selectBlock(number)
        }}
        as="button"
        minH={73}
        p={3.5}
        borderBottom="solid 1px #ffffff1a"
        justifyContent="space-between"
        _hover={{
          bg: 'blackAlpha.300',
        }}
      >
        <Box textAlign="left">
          <Text color="white" fontSize="xl">
            {' '}
            #{number}
          </Text>
          <Text color="whiteAlpha.500" fontSize="sm">
            mined {readableTime(time)}
          </Text>
        </Box>
        <Box>{transactions} TXs</Box>
      </Flex>
      <Flex
        p={3.5}
        pl={5}
        h={256}
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
  )
}

export default BlockCard
