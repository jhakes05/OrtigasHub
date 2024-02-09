import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Footer = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* FAQ Section */}
            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-sm">FAQ</h4>
              <Accordion defaultIndex={[]} className="w-full">
                <AccordionItem>
                  <h2>
                    <AccordionButton onClick={() => setIsOpen1(!isOpen1)}>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} isOpen={isOpen1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton onClick={() => setIsOpen2(!isOpen2)}>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} isOpen={isOpen2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Contact Us Section */}
            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-sm">Contact Us</h4>
              <div className="flex space-x-2">
                {/* Social Media Icons (replace alt with your own icon components) */}
                <img src="/path-to-your-facebook-icon" alt="Facebook" />
                <img src="/path-to-your-instagram-icon" alt="Instagram" />
                <img src="/path-to-your-gmail-icon" alt="Gmail" />
              </div>
            </div>
            {/* About Section */}
            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-sm">About</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae justo nec odio mattis fermentum.
              </p>
            </div>
          </div>
          {/* Copyright Text */}
          <div>
            <p className="text-sm">© 2024 Ortigas Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
