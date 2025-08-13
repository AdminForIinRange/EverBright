"use client";
import { Box, VStack, Text, HStack, Span } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { FaStar } from "react-icons/fa";
const Hero = () => {
  return (
    <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]} mt={"20px"}>
      <VStack>
        <Box w={"100%"} h={"100vh"} fontFamily={"poppins"}>
          <Text
            textAlign={"start"}
            fontWeight={"700"}
            fontFamily={"poppins"}
            textStyle={"title"}
          >
            Because a Clean Home Feels Like A New Home
          </Text>
          <Text
            textAlign={"start"}
            fontWeight={"700"}
            fontFamily={"poppins"}
            textStyle={"subheading"}
          >
            Adelaide's #1 choice for remarkable exterior results
          </Text>
          <Box>
            <VStack justify={"start"} align={"start"}>
              <HStack justify={"start"} align={"start"}>
                <Text color="Black" fontSize="24px" fontWeight={"700"}>
                  ✓{" "}
                  <Span textStyle={"tinyText"} fontWeight={"normal"}>
                    {" "}
                    Pressure Cleaning
                  </Span>
                </Text>
                <Text color="Black" fontSize="24px" fontWeight={"700"}>
                  ✓{" "}
                  <Span textStyle={"tinyText"} fontWeight={"normal"}>
                    {" "}
                    Pressure Cleaning
                  </Span>
                </Text>
              </HStack>
            </VStack>
            <VStack justify={"start"} align={"start"}>
              <HStack justify={"start"} align={"start"}>
                <Text color="Black" fontSize="24px" fontWeight={"700"}>
                  ✓{" "}
                  <Span textStyle={"tinyText"} fontWeight={"normal"}>
                    {" "}
                    Pressure Cleaning
                  </Span>
                </Text>
                <Text color="Black" fontSize="24px" fontWeight={"700"}>
                  ✓{" "}
                  <Span textStyle={"tinyText"} fontWeight={"normal"}>
                    {" "}
                    Pressure Cleaning
                  </Span>
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Box display="flex" justifyContent="start" width="100%">
            <Box
              mt={"20px"}
              p={{ base: "20px", md: "40px" }}
              rounded={"2xl"}
              bg={"cyan.200"}
              border={"1px solid cyan.500"}
              width={{ base: "100%", md: "40%" }}
              textAlign={{ base: "center", md: "left" }}
              position="relative"
              color="cyan.600"
              borderRadius="30px"
              py="10px"
              px={{ base: "20px", md: "20px" }}
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
              <Text>Call for a Quote!</Text>
            </Box>
          </Box>
          <Box
            mt={"20px"}
            p={{ base: "5px", md: "40px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "40%" }}
            textAlign={{ base: "center", md: "left" }}
            position="relative"
          >
            <Box fontSize={{ base: "24px", md: "26px" }}>G</Box>
            <Box
              display="flex"
              h={"100%"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Box
                as={FaStar}
                color={"yellow.400"}
                display="inline-block"
                fontSize={{ base: "18px", md: "26px" }}
              />
              <Box
                as={FaStar}
                color={"yellow.400"}
                display="inline-block"
                fontSize={{ base: "18px", md: "26px" }}
              />
              <Box
                as={FaStar}
                color={"yellow.400"}
                display="inline-block"
                fontSize={{ base: "18px", md: "26px" }}
              />
              <Box
                as={FaStar}
                color={"yellow.400"}
                display="inline-block"
                fontSize={{ base: "18px", md: "26px" }}
              />
              <Box
                as={FaStar}
                color={"yellow.400"}
                display="inline-block"
                fontSize={{ base: "18px", md: "26px" }}
              />
            </Box>
            <Text fontSize={{ base: "18px", md: "26px" }}>
              with 5 stars on Google!
            </Text>
          </Box>
          <Box
            mt={"20px"}
            p={{ base: "20px", md: "40px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "40%" }}
            textAlign={{ base: "center", md: "left" }}
            position="relative"
          >
            <VStack
              display="flex"
              h={"100%"}
              alignContent={"center"}
              justifyContent={"center"}
              textAlign={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"subheading"}
            >
              Arrange a Free Quote
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                fontFamily={"poppins"}
                textStyle={"tinyText"}
              >
                Adelaide's #1 choice for remarkable exterior results
              </Text>
              <Box
                mt={"20px"}
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="#2D3748"
              />
              <Box display="flex" justifyContent="start" width="100%">
                <Box
                  mt={"5px"}
                  p={{ base: "20px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"cyan.200"}
                  border={"1px solid cyan.500"}
                  width={{ base: "100%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  position="relative"
                  color="cyan.600"
                  borderRadius="30px"
                  py="10px"
                  px={{ base: "20px", md: "20px" }}
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
                  <Text>Call for a Quote!</Text>
                </Box>
              </Box>
            </VStack>
          </Box>
          <Box
            mt={"20px"}
            p={{ base: "20px", md: "40px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "40%" }}
            textAlign={{ base: "center", md: "left" }}
          >

            
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
export default Hero;
