import React from 'react'
import { ButtonGroup, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import backgroundImage from "../assets/bg.jpg"; // Import your background image
const Registration = () => {
  return (
    <div   
    className="bg-cover min-h-screen relative"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex justify-center items-center h-screen text-white">
      <div className="border border-gray-500 p-8 rounded-lg bg-gray-800">
      <img src={logo} alt={logo} width="200" height="50" className="bg-transparent border-none pb-[1rem]" />
        <FormControl className="text-black">
        <p className="text-white text-[1.5rem]">Registration</p>
        <FormLabel className="text-white">Name</FormLabel>
          <Input type="name" style={{background: "white"}} />
          <FormLabel className="text-white">Email address</FormLabel>
          <Input type="email" style={{background: "white"}} />
          <FormLabel className="text-white">Password</FormLabel>
          <Input type="password" style={{background: "white"}}/>
          <FormLabel className="text-white">Confirm Password</FormLabel>
          <Input type="password" style={{background: "white"}}/>
          <ButtonGroup className="pt-5">
            <Button colorScheme="blue" className='flex justify-center '>Register</Button>
          </ButtonGroup>
        </FormControl>
      </div>
    </div>
    </div>
  )
}

export default Registration