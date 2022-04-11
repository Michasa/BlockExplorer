import { Box, Flex } from '@chakra-ui/react'
import Stat from './Stat'

const BlockStatsBar = ({ selectedBlockData }) => {
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
        <Stat title="Current Block" value={selectedBlockData.number} />
        <Stat
          title="Average Gas Price"
          value={selectedBlockData.averageGasPrice}
          unit="gwei"
        />
        <Stat
          title="Average Block Size"
          value={selectedBlockData.averageSize}
          unit="mgas"
        />
        <Stat
          title="Average Block Fullness"
          value={selectedBlockData.fullness}
        />
      </Flex>
    </Box>
  )
}

export default BlockStatsBar
