import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "./sections/cart";
import Details from "./sections/details";

function App() {
  // container.xlもthemeで変更可能
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        // h="100vh"
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
