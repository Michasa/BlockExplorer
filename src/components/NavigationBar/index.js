import { Box, Flex, IconButton } from '@chakra-ui/react'
import {
  InfuraIcon,
  MeterIcon,
  FolderIcon,
  ExplorerIcon,
  SettingsIcon,
  OffIcon,
} from '../Icons/'
import Option from './Option'

function NavigationBar() {
  return (
    <Flex
      position="fixed"
      flexDirection="column"
      width={24}
      height="100vh"
      bg="brand.purpleLight"
      as="nav"
      boxShadow="5px 0px 50px 0px #0000001A"
    >
      <IconButton
        variant="ghost"
        aria-label="Return to Infura"
        h={24}
        icon={<InfuraIcon />}
        width="100%"
        borderBottom=" 1px solid #6258A4"
        borderRadius="0"
      />
      <Flex h="100%" flexDirection="column" justifyContent="space-between">
        <Box>
          <Option title="Dashboard" icon={<MeterIcon />} />
          <Option title="Projects" icon={<FolderIcon />} />
          <Option title="Explorer" icon={<ExplorerIcon />} isActive />
        </Box>
        <Box>
          <Option title="Settings" icon={<SettingsIcon />} />
          <Option title="Logout" icon={<OffIcon />} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default NavigationBar
