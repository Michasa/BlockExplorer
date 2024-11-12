import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import BlocksDisplay from '../components/BlocksDisplay/index.js'
import BlockStatsBar from '../components/BlockStatsBar/index.js'
import { fetchNewBlockData, fetchNewBlockNumber } from '../utils/addNewBlock'

const SELECTED_BLOCK_DEFAULT_VALUES = {
  averageGasPrice: null,
  averageSize: null,
  fullness: null,
  number: null,
  time: null,
  transactions: null,
}

const BlockExplorerView = () => {
  const [minedBlocks, setMinedBlocks] = useState([])
  const [selectedBlockData, setSelectedBlockData] = useState(
    SELECTED_BLOCK_DEFAULT_VALUES
  )
  const [isLoading, setIsLoading] = useState(false)

  const fetchLatestBlock = async () => {
    setIsLoading(true)
    fetchNewBlockNumber(minedBlocks)
      .then(newBlockNumber => {
        if (newBlockNumber) {
          return fetchNewBlockData(newBlockNumber)
        } else {
          return setIsLoading(false)
        }
      })
      .then(newBlock => {
        if (newBlock) {
          setSelectedBlockData(newBlock)
          setMinedBlocks([newBlock, ...minedBlocks])
          setIsLoading(false)
        } else {
          return setIsLoading(false)
        }
      })
  }

  const selectBlock = blockId => {
    let foundBlock = minedBlocks.find(block => block.number === blockId)
    setSelectedBlockData(foundBlock)
  }

  const clearSelectBlock = () => {
    setSelectedBlockData(SELECTED_BLOCK_DEFAULT_VALUES)
  }

  return (
    <Flex flexDirection="column" width="100%" pl={24}>
      <BlockStatsBar selectedBlockData={selectedBlockData} />
      <BlocksDisplay
        isLoading={isLoading}
        clearSelectBlock={clearSelectBlock}
        selectBlock={selectBlock}
        fetchLatestBlock={fetchLatestBlock}
        minedBlocks={minedBlocks}
        selectedBlockId={selectedBlockData && selectedBlockData.number}
      />
    </Flex>
  )
}

export default BlockExplorerView
