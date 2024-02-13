import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, ButtonGroup } from "@chakra-ui/react";
import { Link, Box, Flex, Spacer } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import { useState } from "react";
import register from '../Components/Registration';
const Nav = () => {
  // State to manage modal open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to open modal
  const onOpen = () => setIsOpen(true);

  // Function to close modal
  const onClose = () => setIsOpen(false);

  return (
    <Flex className="bg-gray-800 p-1 flex items-center text-white">
      <Link to='/' className="pl-5">
        {/* Using the logo imported from assets */}
        <img src={logo} alt={logo} width="200" height="50" className="bg-transparent border-none" />
      </Link>
      <Spacer />
      <Box p="2">
        <Link>Welcome</Link>
      </Box>
      <Box p="2">
        <Link>Matches</Link>
      </Box>
      <Box p="2">
        <Link>Connection</Link>
      </Box>
      <Box p="2">
        <Link>Messages</Link>
      </Box>
      <Box p="2">
        <Link>Events</Link>
      </Box>
      <Box p="2">
        {/* Login button */}
        <Button onClick={onOpen}>Login</Button>
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent className="flex justify-center items-center h-screen text-white border">
            <ModalBody className="border border-gray-500 p-8 rounded-lg bg-gray-800">
            <img src={logo} alt={logo} width="200" height="50" className="bg-transparent border-none pb-[1rem]" />
            <ModalCloseButton />
              {/* Your login form */}
                  <FormControl className="text-black">
                    <FormLabel className="text-white">Email address</FormLabel>
                    <Input type="email" style={{background: "white"}} />
                    <FormLabel className="text-white">Password</FormLabel>
                    <Input type="password" style={{background: "white"}} />
                    <ButtonGroup className="pt-5">
                      <Button src={register} colorScheme="blue">Sign Up</Button>
                      <Button colorScheme="blue">Sign In</Button>
                    </ButtonGroup>
                  </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default Nav;
