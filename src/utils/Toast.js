import { createStandaloneToast } from '@chakra-ui/react'

const DEFAULT_PARAMETERS = {
  position: 'top-right',
  duration: 4500,
  isClosable: true,
}

export const toast = createStandaloneToast()

export const createToast = parameters => {
  return toast({ ...DEFAULT_PARAMETERS, ...parameters })
}
