import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

import Cart from "~/components/Cart";
import Details from "~/components/Details";

const Home: NextPage = () => {
  return (
    <Container maxWidth={"container.xl"} padding={0}>
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        h={{ base: "auto", lg: "100vh" }}
        py={[0, 10, 20]}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};
export default Home;
