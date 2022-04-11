import { Button, Center } from '@chakra-ui/react';
import React from 'react';

const GenerateCardButton = () => {
  return (
    <Center h={376} w={276} m={6} bg="whiteAlpha.100">
      <Button width="50%" aria-label="Load More Blocks">
        Load More...
      </Button>
    </Center>
  );
};

export default GenerateCardButton;
