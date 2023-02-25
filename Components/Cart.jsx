import {
  AspectRatio,
  Image,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secText = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      height="full"
      spacing={10}
      p={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
        <Button onClick={toggleColorMode} variant="link" color={secText}>
          try changing the theme.
        </Button>
      </VStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <AspectRatio ratio={1} w={24}>
            <Image src="/Frog.webp" alt="froggy" />
          </AspectRatio>
          <Stack>
            <Heading size="md">Froggy NFT</Heading>
            <Text color={secText}>D02CIDOZ214S</Text>
          </Stack>
          <Heading size="sm">$119.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secText}>Subtotal</Text>
          <Heading size="sm">$119.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secText}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secText}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secText}>Total</Text>
          <Heading size="lg">$youre broke lol</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
