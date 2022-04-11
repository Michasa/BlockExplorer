import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import explorerTheme from '../styles/theme.js'
import NavigationBar from '../components/NavigationBar'
import BlockExplorerView from './BlockExplorerView'

const theme = extendTheme(explorerTheme)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh" flexDirection="row" textAlign="center" fontSize="xl">
        <NavigationBar />
        <BlockExplorerView />
      </Flex>
    </ChakraProvider>
  )
}

export default App
