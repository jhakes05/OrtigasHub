import React from "react";
import { ButtonGroup, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import logo from '../assets/logo.png';
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="border border-gray-500 p-8 rounded-lg bg-gray-800">
      <img src={logo} alt={logo} width="200" height="50" className="bg-transparent border-none pb-[1rem]" />
        <FormControl className="text-black">
          <FormLabel className="text-white">Email address</FormLabel>
          <Input type="email" style={{background: "white"}} />
          <FormLabel className="text-white">Password</FormLabel>
          <Input type="password" style={{background: "white"}}/>
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
