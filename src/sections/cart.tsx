import{
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Image,
  SimpleGrid,
  GridItem,
  Button,
  AspectRatio,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,
          <Button
            variant="link"
            colorScheme="black"
            onClick={ toggleColorMode }>
             &nbsp; try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image
            src="/images/skateboard.png"
            alt="photo of pennyboard" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny Board</Heading>
            <Text color={textColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack
        spacing={4}
        alignItems="stretch"
        w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Sub-total</Text>
          <Heading size="sm" textAlign="end">
            $19.99
          </Heading>
        </HStack>
      </VStack>
      <VStack
        spacing={4}
        alignItems="stretch"
        w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Taxes (estimated)</Text>
          <Heading size="sm" textAlign="end">
            $23.80
          </Heading>
        </HStack>
      </VStack>
      <Divider orientation="horizontal "></Divider>
       <VStack
        spacing={4}
        alignItems="stretch"
        w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Total</Text>
          <Heading size="lg" textAlign="end">
            $162.79
          </Heading>
        </HStack>
      </VStack>


    </VStack>
  );
};

export default Cart;
