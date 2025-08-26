import React from 'react'
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
function ServicesBox() {
  return (
    <>
        <Box
       
          zIndex={"1"}
          mt={"0px"}

          rounded={"2xl"}
          // bg={"blue.50"}

          textAlign={{ base: "left", md: "left" }}
        >
          <Box
            w={"500px"}
            zIndex={"1"}
            mt={"20px"}
            p={{ base: "10px", md: "10px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box
              w={"100%"}
              zIndex={"1"}
              h={"200px"}
              p={{ base: "20px", md: "40px" }}
              pb={"150px"}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              textAlign={{ base: "center", md: "center" }}
            ></Box>

            <Text
              py={"10px"}
              textAlign={"center"}
              fontWeight={"600"}
              fontFamily={"poppins"}
              textStyle={"subheading"}
              w={"100%"}
            >
              Pressure Washing
            </Text>
            <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
              <Box
                h={"100%"}
                zIndex={"1"}
                p={"10px"}
                width={"100%"}
                rounded={"2xl"}
              bg={"cyan.500"}
                border={"1px solid lightgray"}
                textAlign={{ base: "center", md: "center" }}
                fontSize={"12px"}
                fontWeight={"600"}
                color={"white"}
              >
                Get a quote
              </Box>
              <Link
                href={"/services/PressureWashing"}
                cursor={"pointer"}
                zIndex={"1"}
                h={"100%"}
                p={"10px"}
                width={"100%"}
                rounded={"2xl"}
              bg={"cyan.500"}
                border={"1px solid lightgray"}
                textAlign={{ base: "center", md: "center" }}
                fontSize={"12px"}
                fontWeight={"600"}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  bg: "blue.500",
                }}
              >
                <HStack w={"100%"} align={"center"} justify={"center"}>
                  Learn More
                </HStack>
              </Link>
            </HStack>
          </Box>
        </Box>

    </>
  )
}

export default ServicesBox