"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";

const FreeQuote = () => {
  return (
    <Box
      w={["100%", "100%", "600px"]}
      bg="white"
      borderRadius={["20px", "20px"]}
      pt={8}
      textAlign="center"
      border={"10px solid #00B5E2"}
    >
      {/* Heading */}
      <VStack justify={"center"} align={"center"}>
        <Text
          fontFamily={"poppins"}
          fontSize={["26px", "36px"]}
          fontWeight="900"
          color="blue.900"
        >
          Get Instant <Span color="cyan.500">FREE QUOTE</Span>
        </Text>
        <Text
          textAlign={"center"}
          fontSize="sm"
          w={["80%", "100%", "600px"]}
          fontWeight="600"
          color="blue.900"
          mb={1}
        >
          30 Seconds to Your Free Quote No Commitments
        </Text>
      </VStack>

      {/* Reviews Row */}

      {/* Inputs (styled boxes only, since no Chakra Input) */}
      <VStack p={4} spacing={3} align="stretch">
        <HStack wrap={"wrap"}>
          <Box
            as="input"
            placeholder="Name"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
          <Box
            as="input"
            placeholder="Phone"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
        </HStack>
        <HStack wrap={"wrap"}>
          <Box
            as="input"
            placeholder="Email"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
          <Box
            as="input"
            placeholder="Suburb"
            flex="1"
            border="1px solid #e2e8f0"
            borderRadius="md"
            py={2}
            px={3}
            fontSize="sm"
          />
        </HStack>
        <Box
          as="input"
          placeholder="Address"
          border="1px solid #e2e8f0"
          borderRadius="md"
          py={2}
          px={3}
          fontSize="sm"
        />
        <Box
          as="textarea"
          placeholder="How can we help"
          border="1px solid #e2e8f0"
          borderRadius="md"
          py={2}
          px={3}
          fontSize="sm"
        />
        <Box
          as="button"
          w="100%"
          mt={5}
          py={3}
          borderRadius="md"
          bg="cyan.500"
          color="white"
          fontWeight="700"
          fontSize="md"
          _hover={{ opacity: 0.9 }}
        >
          Submit
        </Box>
      </VStack>

      {/* CTA Button */}
    </Box>
  );
};

export default FreeQuote;
