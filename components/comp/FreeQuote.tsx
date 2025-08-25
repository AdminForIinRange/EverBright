import React from 'react'
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import Google from "@/public/Google.png";

const FreeQuote = () => {
  return (
    <>
     <Box
                position="relative"
                h={["100%", "100%", "100%", "100%", "100%", "100%"]}
                w={["95%", "95%", "95%", "600px", "600px", "600px"]}
                borderRadius="30px"
                bgPos="center"
                bgSize="cover"
                // Change this to any background you want
                // Change this to any background you want
                overflow="hidden"
                display={"flex"}
                justifyContent={"end"}
              >
                {/* Horizontal line for crosshair */}
                <Box
                  position="relative"
                  h={["100%", "100%", "100%", "100%", "100%", "100%"]}
                  w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                  borderRadius="30px"
                  bg="white" // Change this to any background you want
                  overflow="hidden"
                >
                  {" "}
                  <VStack
                    border={"5px solid lightblue"}
                    borderRadius={"30px"}
                    p={4}
                    display="flex"
                    h={"100%"}
                    alignContent={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    fontWeight={"700"}
                    fontFamily={"poppins"}
                    fontSize={"30px"}
                  >
                    <Text color={"blue.800"}>
                      Get Instant <Span color={"blue.500"}> FREE QUOTE</Span>
                    </Text>
                    <Text
                      textAlign={"center"}
                      fontWeight={"500"}
                      fontFamily={"poppins"}
                      textStyle={"smallText"}
                      color={"black"}
                    >
                      Adelaide's #1 choice for remarkable exterior results
                    </Text>
                    <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]} mt={"10px"}>
                      <Box
                        fontWeight={"500"}
                        w={"100%"}
                        as="input"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="Full Name"
                        borderBottom="1px solid #E2E8F0"
                        flex="1"
                        fontSize="14px"
                        outline="none"
                        py="10px"
                        bg="transparent"
                        color="white"
                        textColor={"white"}
                      />
                      <Box
                        fontWeight={"500"}
                        w={"100%"}
                        as="input"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="Email"
                        borderBottom="1px solid #E2E8F0"
                        flex="1"
                        fontSize="14px"
                        outline="none"
                        py="10px"
                        bg="transparent"
                        color="white"
                        textColor={"white"}
                      />
                      <Box
                        fontWeight={"500"}
                        w={"100%"}
                        as="input"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="Mobile"
                        borderBottom="1px solid #E2E8F0"
                        flex="1"
                        fontSize="14px"
                        outline="none"
                        py="10px"
                        bg="transparent"
                        color="white"
                        textColor={"white"}
                      />
                      <Box
                        fontWeight={"500"}
                        w={"100%"}
                        as="input"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="Home Address"
                        borderBottom="1px solid #E2E8F0"
                        flex="1"
                        fontSize="14px"
                        outline="none"
                        py="10px"
                        bg="transparent"
                        color="white"
                        textColor={"white"}
                      />
                      <Box
                        fontWeight={"500"}
                        w={"100%"}
                        as="textarea"
                        // value={input}
                        // onChange={(e) => setInput(e.target.value)}
                        placeholder="Tell Us About Your Job"
                        borderBottom="1px solid #E2E8F0"
                        flex="1"
                        fontSize="14px"
                        outline="none"
                        py="10px"
                        bg="transparent"
                        color="white"
                        textColor={"white"}
                      />
    
                      <Box display="flex" justifyContent="start" width="100%">
                        <Box
                          w={"100%"}
                          mt={"5px"}
                          p={{ base: "15px", md: "15px" }}
                          rounded={"2xl"}
                          bg={"cyan.200"}
                          border={"1px solid cyan.500"}
                          width={{ base: "100%", md: "100%" }}
                          textAlign={{ base: "center", md: "left" }}
                          position="relative"
                          color="cyan.600"
                          borderRadius="30px"
                          fontFamily="arial"
                          fontWeight="600"
                          fontSize="16px"
                          cursor="pointer"
                          transition="all 0.3s ease"
                          _hover={{
                            transform: "translateY(-3px)",
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                          }}
                          // onClick={() => setIsDialogOpen(true)}
                        >
                          <Text textAlign={"center"}>Call for a Quote!</Text>
                        </Box>
                      </Box>
                    </Box>
                  </VStack>
                </Box>
                {/* Bottom-right label */}
               
              </Box>
    </>
  )
}

export default FreeQuote