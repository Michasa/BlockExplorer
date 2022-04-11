import { Button, Center } from '@chakra-ui/react'

const GenerateCardButton = ({ fetchLatestBlock, hasBlocks, isLoading }) => {
  return (
    <Center h={376} w={276} m={6} bg="whiteAlpha.100">
      <Button
        variant="solid"
        bg="whiteAlpha.300"
        textTransform="uppercase"
        fontWeight={300}
        aria-label="Fetch More Blocks"
        onClick={fetchLatestBlock}
        p={4}
        size="lg"
        isLoading={isLoading}
        loadingText="Fetching..."
        _hover={{
          bg: 'whiteAlpha.500',
        }}
      >
        {hasBlocks ? 'Fetch More...' : 'Fetch New Block'}
      </Button>
    </Center>
  )
}

export default GenerateCardButton
