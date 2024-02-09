import React from "react";
import { ButtonGroup, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-gray-500 p-8 rounded-lg">
        <FormControl>
        <h1 className="text-3xl text-center">Ortigas Hub</h1>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <ButtonGroup className="pt-5">
            <Button colorScheme="blue">Sign Up</Button>
            <Button colorScheme="blue">Sign In</Button>
          </ButtonGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
