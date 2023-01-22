import { useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Cart({}: Props) {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      //   bg="gray.50"
      bg={bgColor}
    >
      teset2
    </VStack>
  );
}
