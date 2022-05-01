import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const Cart: NextPage = () => {
  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p="10"
      spacing="10"
      align="flex-start"
      bg={bgColor}
    >
      {/* Title */}

      <VStack spacing={3} align="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button
            onClick={toggleColorMode}
            variant={"link"}
            colorScheme="black"
          >
            try changing the theme
          </Button>
          .
        </Text>
      </VStack>

      {/* Details with image */}

      <HStack w="full">
        <AspectRatio ratio={1} width="24">
          <Image
            src="/static/images/skate.png"
            layout="fill"
            alt="skateboard"
          />
        </AspectRatio>

        <Stack
          direction="row"
          w="full"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <VStack spacing={0} alignItems={"flex-start"}>
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign={"end"}>
            $119.00
          </Heading>
        </Stack>
      </HStack>

      {/* Setting space */}

      <VStack spacing={"4"} w="full">
        {/* Subtotal */}
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>

        {/* Shipping */}
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>

        {/* Taxes */}
        <HStack justifyContent={"space-between"} w="full">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>

      <Divider />

      {/* Total */}
      <HStack justifyContent={"space-between"} w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
