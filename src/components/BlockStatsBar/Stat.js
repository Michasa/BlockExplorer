import { Box, Skeleton, Text } from '@chakra-ui/react'

const Stat = ({ title, value, unit }) => {
  const displayStatValue = () => {
    if (value) {
      return (
        <Text fontSize="5xl" fontWeight={100}>
          {value}
          {unit && (
            <Text
              as="span"
              fontSize="lg"
              ml={1}
              fontWeight={100}
              color="whiteAlpha.900"
            >
              {unit}
            </Text>
          )}
        </Text>
      )
    } else {
      return (
        <Skeleton
          startColor="brand.purpleLight"
          endColor="brand.purpleDark"
          height="72px"
        />
      )
    }
  }

  return (
    <Box>
      <Text
        color="whiteAlpha.500"
        textTransform="uppercase"
        textAlign={['center', null, null, 'left']}
        fontSize="md"
        fontWeight={200}
      >
        {title}
      </Text>
      <>{displayStatValue()}</>
    </Box>
  )
}
export default Stat
