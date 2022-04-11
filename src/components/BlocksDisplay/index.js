import { Box, Flex } from '@chakra-ui/react'
import BlockCard from './BlockCard'
import '../../styles/index.scss'
import GenerateCardButton from './GenerateCardButton'

const BlocksDisplay = ({
  fetchLatestBlock,
  clearSelectBlock,
  minedBlocks,
  selectBlock,
  selectedBlockId,
  isLoading,
}) => {
  return (
    <Box pl={[0, null, null, '48px']} pt={[0, null, null, '150px']}>
      <Flex
        className="block-container"
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        justifyContent="center"
        flexWrap="wrap"
      >
        <GenerateCardButton
          fetchLatestBlock={fetchLatestBlock}
          hasBlocks={!!minedBlocks.length}
          isLoading={isLoading}
        />
        {minedBlocks.map(block => (
          <BlockCard
            key={block.number}
            selectedBlockId={selectedBlockId}
            selectBlock={selectBlock}
            clearSelectBlock={clearSelectBlock}
            {...block}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default BlocksDisplay
