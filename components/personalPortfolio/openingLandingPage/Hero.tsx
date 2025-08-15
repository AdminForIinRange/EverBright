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
            pb={"50px"}
            zIndex={"-1"}
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
          <HStack justify={"center"}>
            <Box
              zIndex={"1"}
              mt={"-30px"}
              p={{ base: "20px", md: "40px" }}
              pb={"80px"}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "80%", md: "40%" }}
              textAlign={{ base: "center", md: "left" }}
            ></Box>
          </HStack>

          <VStack>
            <Text
              mt={"50px"}
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
            >
              Adelaide's #1 choice for remarkable exterior results
            </Text>

            <Text w={"100%"} textAlign={"start"} color="Black" fontSize="14px">
              Experience “100% Risk-Free Pressure Cleaning” from Calibre
              Exterior Cleaning, Adelaide’s premier exterior cleaning
              specialists. Our local team of skilled professionals is dedicated
              to revitalising your property’s appearance with state-of-the-art
              equipment and eco-friendly cleaning solutions.
              <br />
              <br />
              With a deep understanding of Adelaide’s unique climate and
              environment, we ensure the highest quality results while
              protecting your property’s structural integrity. Trust in our
              no-hassle satisfaction guarantee and let Calibre Exterior Cleaning
              bring new life to your home or business. Request a quote today and
              uncover the unparalleled benefits of Adelaide’s leading pressure
              cleaning experts!
              <br />
              <br />
              <Span fontWeight={"700"}>
                bring new life to your home or business. Request a quote today
                and uncover the unparalleled benefits of Adelaide’s leading
                pressure cleaning experts!
              </Span>
            </Text>
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
          </VStack>
          <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "20px", md: "40px" }}
              pb={"150px"}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "80%", md: "40%" }}
              textAlign={{ base: "center", md: "left" }}
            ></Box>
            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "20px", md: "40px" }}
              pb={"150px"}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "80%", md: "40%" }}
              textAlign={{ base: "center", md: "left" }}
            ></Box>
          </HStack>

          <Box
            w={"100%"}
            zIndex={"1"}
            mt={"5px"}
            p={{ base: "20px", md: "40px" }}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "100%" }}
            textAlign={{ base: "left", md: "left" }}
          >
            <Text
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
              borderBottom={"2px solid lightblue"}
            >
              How We Can Help Your Home
            </Text>

            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "10px", md: "10px" }}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "100%", md: "100%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Box
                w={"100%"}
                zIndex={"1"}
                p={{ base: "20px", md: "40px" }}
                pb={"150px"}
                rounded={"2xl"}
                bg={"gray.50"}
                border={"1px solid lightgray"}
                width={{ base: "100%", md: "100%" }}
                textAlign={{ base: "center", md: "left" }}
              ></Box>

              <Text
                py={"10px"}
                justifyContent={"start"}
                alignContent={"start"}
                fontWeight={"700"}
                fontFamily={"poppins"}
                textStyle={"heading"}
                w={"100%"}
                fontSize="16px"
              >
                How We Can Help Your Home
              </Text>
              <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Get a quote
                </Box>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Learn More
                </Box>
              </HStack>
            </Box>

            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "10px", md: "10px" }}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "100%", md: "100%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Box
                w={"100%"}
                zIndex={"1"}
                p={{ base: "20px", md: "40px" }}
                pb={"150px"}
                rounded={"2xl"}
                bg={"gray.50"}
                border={"1px solid lightgray"}
                width={{ base: "100%", md: "100%" }}
                textAlign={{ base: "center", md: "left" }}
              ></Box>

              <Text
                py={"10px"}
                justifyContent={"start"}
                alignContent={"start"}
                fontWeight={"700"}
                fontFamily={"poppins"}
                textStyle={"heading"}
                w={"100%"}
                fontSize="16px"
              >
                How We Can Help Your Home
              </Text>
              <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Get a quote
                </Box>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Learn More
                </Box>
              </HStack>
            </Box>

            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "10px", md: "10px" }}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "100%", md: "100%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Box
                w={"100%"}
                zIndex={"1"}
                p={{ base: "20px", md: "40px" }}
                pb={"150px"}
                rounded={"2xl"}
                bg={"gray.50"}
                border={"1px solid lightgray"}
                width={{ base: "100%", md: "100%" }}
                textAlign={{ base: "center", md: "left" }}
              ></Box>

              <Text
                py={"10px"}
                justifyContent={"start"}
                alignContent={"start"}
                fontWeight={"700"}
                fontFamily={"poppins"}
                textStyle={"heading"}
                w={"100%"}
                fontSize="16px"
              >
                How We Can Help Your Home
              </Text>
              <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Get a quote
                </Box>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Learn More
                </Box>
              </HStack>
            </Box>

            <Box
              w={"100%"}
              zIndex={"1"}
              mt={"30px"}
              p={{ base: "10px", md: "10px" }}
              rounded={"2xl"}
              bg={"gray.50"}
              border={"1px solid lightgray"}
              width={{ base: "100%", md: "100%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Box
                w={"100%"}
                zIndex={"1"}
                p={{ base: "20px", md: "40px" }}
                pb={"150px"}
                rounded={"2xl"}
                bg={"gray.50"}
                border={"1px solid lightgray"}
                width={{ base: "100%", md: "100%" }}
                textAlign={{ base: "center", md: "left" }}
              ></Box>

              <Text
                py={"10px"}
                justifyContent={"start"}
                alignContent={"start"}
                fontWeight={"700"}
                fontFamily={"poppins"}
                textStyle={"heading"}
                w={"100%"}
                fontSize="16px"
              >
                How We Can Help Your Home
              </Text>
              <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Get a quote
                </Box>
                <Box
                  w={"100%"}
                  zIndex={"1"}
                  p={{ base: "5px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"gray.50"}
                  border={"1px solid lightgray"}
                  width={{ base: "80%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  Learn More
                </Box>
              </HStack>
            </Box>
          </Box>

          <VStack>
            <Text
              mt={"50px"}
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
            >
              Adelaide's #1 choice for remarkable exterior results
            </Text>

            <Text w={"100%"} textAlign={"start"} color="Black" fontSize="14px">
              Experience “100% Risk-Free Pressure Cleaning” from Calibre
              Exterior Cleaning, Adelaide’s premier exterior cleaning
              specialists. Our local team of skilled professionals is dedicated
              to revitalising your property’s appearance with state-of-the-art
              equipment and eco-friendly cleaning solutions.
              <br />
              <br />
              With a deep understanding of Adelaide’s unique climate and
              environment, we ensure the highest quality results while
              protecting your property’s structural integrity. Trust in our
              no-hassle satisfaction guarantee and let Calibre Exterior Cleaning
              bring new life to your home or business. Request a quote today and
              uncover the unparalleled benefits of Adelaide’s leading pressure
              cleaning experts!
              <br />
              <br />
              <Span fontWeight={"700"}>Shayal - Owner</Span>
            </Text>
          </VStack>

          <VStack>
            <Text
              mt={"50px"}
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
            >
              Read Some of Our Reviews
            </Text>

            <HStack
              p={{ base: "5px", md: "40px" }}
              rounded={"2xl"}
              // bg={"gray.50"}
              // border={"1px solid lightgray"}
              width={{ base: "100%", md: "40%" }}
              textAlign={{ base: "center", md: "left" }}
              position="relative"
            >
              <Box fontWeight={"700"} fontSize={{ base: "34px", md: "26px" }}>
                G
              </Box>
              <Box fontSize={{ base: "24px", md: "26px" }}>5.0</Box>
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
            </HStack>
            <Box w="100%" maxW="350px" mx="auto">
              <HStack
                overflowX="auto"
                overflowY="hidden"
                spacing={4}
                align="start"
                pb={2} // room for scrollbar
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <Box
                    key={i}
                    flexShrink={0} // don’t squash
                    w="300px"
                    h="200px"
                    zIndex={1}
                    p={{ base: "20px", md: "40px" }}
                    rounded="2xl"
                    bg="gray.50"
                    border="1px solid lightgray"
                    textAlign={{ base: "center", md: "left" }}
                  />
                ))}
              </HStack>
            </Box>

            <Text
              mt={"25px"}
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
            >
              Read Some of Our Reviews
            </Text>
            <Text
              mt={"25px"}
              justifyContent={"start"}
              alignContent={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              textStyle={"heading"}
              w={"100%"}
            >
              What we Promise
            </Text>

            <VStack justify={"start"} align={"start"} w={"100%"}>
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
              <Box
                mt={"20px"}
                p={{ base: "20px", md: "40px" }}
                rounded={"2xl"}
                bg={"gray.50"}
                border={"1px solid lightgray"}
                width={{ base: "100%", md: "40%" }}
                textAlign={{ base: "center", md: "left" }}
                position="relative"
                pb={"50px"}
                zIndex={"-1"}
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
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
export default Hero;
