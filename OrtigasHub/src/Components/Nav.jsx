import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex className="bg-gray-800 p-1 flex items-center">
      <Box p="2">
        <Button colorScheme="whiteAlpha">Home</Button>
      </Box>
      <Spacer />
      <Box p="2">
        <Button colorScheme="whiteAlpha">About</Button>
      </Box>
      <Box p="2">
        <Button colorScheme="whiteAlpha">Services</Button>
      </Box>
      <Box p="2">
        <Button colorScheme="whiteAlpha">Contact</Button>
      </Box>
    </Flex>
  );
};

export default Nav;
