

import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";

const HeroText = () => {
  return (
    <>   <Text
              as={"h2"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              mt={["15px", "15px", "15px", "15px", "15px", "15px"]}
              fontSize={{ base: "32px", md: "42px", lg: "62px" }} 
              fontWeight={600}
              fontFamily={"poppins"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"white"}
              bgGradient="linear(to-r, teal, blue)"
              lineHeight={"0.9"}
            >
              Because a Clean Home Feels Like a New Home
            </Text>
            <Text
              as={"p"}
              textStyle={"subheading"}
              mt={["20px", "20px", "20px", "20px", "20px", "20px"]}
              textAlign={["center", "center", "center", "left", "left", "left"]}
              fontFamily={"poppins"}
              color={"blue.200"}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
              fontWeight={"700"}
            >
              Adelaide’s #1 Choice for Remarkable Exterior Cleaning!
            </Text>

            <Box>
              <VStack
                justify={["center", "center", "center", "start", "start"]}
                align={["center", "center", "center", "start", "start"]}
              >
                <HStack
                  justify={["center", "center", "center", "start", "start"]}
                  align={["center", "center", "center", "start", "start"]}
                >
                  <Text
                    color="green.300"
                    fontSize="24px"
                    fontWeight={"700"}
                    textStyle={"subheading"}
                  >
                    ✓{" "}
                    <Span
                      textStyle={"basicText"}
                      color="white"
                      fontWeight={"normal"}
                    >
                      {" "}
                      Pressure Cleaning
                    </Span>
                  </Text>
                  <Text color="green.300" fontSize="24px" fontWeight={"700"}>
                    ✓{" "}
                    <Span
                      textStyle={"basicText"}
                      color="white"
                      fontWeight={"normal"}
                    >
                      {" "}
                      Pressure Cleaning
                    </Span>
                  </Text>
                </HStack>
              </VStack>
              <VStack
                justify={["center", "center", "center", "start", "start"]}
                align={["center", "center", "center", "start", "start"]}
              >
                <HStack
                  justify={["center", "center", "center", "start", "start"]}
                  align={["center", "center", "center", "start", "start"]}
                >
                  <Text color="green.300" fontSize="24px" fontWeight={"700"}>
                    ✓{" "}
                    <Span
                      textStyle={"basicText"}
                      color="white"
                      fontWeight={"normal"}
                    >
                      {" "}
                      Pressure Cleaning
                    </Span>
                  </Text>
                  <Text color="green.300" fontSize="24px" fontWeight={"700"}>
                    ✓{" "}
                    <Span
                      textStyle={"basicText"}
                      color="white"
                      fontWeight={"normal"}
                    >
                      {" "}
                      Pressure Cleaning
                    </Span>
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <HStack
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={"start"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={4}
            >
              <Box
                bg={"cyan.500"}
                my={"25px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={["center"]}
                gap={"15px"}
                fontFamily={"poppins"}
                transition={"all 0.2s ease-in-out"}
                cursor={"pointer"}
                _hover={{
                  transition: "all 0.2s ease-in-out",
                  scale: 1.1,
                  fontWeight: "700",
                  px: "80px",
                  bg: "black",
                }}
                p={4}
                color={"white"}
                rounded={"30px"}
                px={"12"}
                fontWeight={"500"}
                onClick={() => router.push("/services")}
              >
                Call for a Quote!
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>
            <HStack
              rounded={"2xl"}
              // bg={"gray.50"}
              // border={"1px solid lightgray"}
              width={{ base: "100%", md: "100%" }}
              textAlign={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              position="relative"
            >
              <Box fontSize={{ base: "24px", md: "26px" }}>
                <Image src={Google} alt="Google" width="50" />
              </Box>
              <Box
                color={"white"}
                fontSize={{ base: "24px", md: "26px" }}
                fontWeight={"500"}
                fontFamily={"poppins"}
              >
                5.0
              </Box>
              <Box
                display="flex"
                h={"100%"}
                alignContent={[
                  "center",
                  "center",
                  "center",
                  "start",
                  "start",
                  "start",
                ]}
                justifyContent={[
                  "center",
                  "center",
                  "center",
                  "start",
                  "start",
                  "start",
                ]}
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
            </HStack>
            <Text
              textAlign={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              color={"white"}
              fontSize={{ base: "18px", md: "26px" }}
              fontWeight={"500"}
              fontFamily={"poppins"}
              mt={"8px"}
            >
              Verified 5 stars on Google!
            </Text></>
  )
}

export default HeroText