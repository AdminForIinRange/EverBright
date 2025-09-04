"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { VStack, HStack, Box, Text } from "@chakra-ui/react";

const FooterPressure: React.FC = () => {
  return (
    <Box as="footer" bg="#0a0f29" color="white" pt={{ base: 10, md: 14 }} pb={{ base: 8, md: 10 }} aria-label="Footer">
      {/* Top value bar — quick trust badges */}
      <HStack
        spacing={{ base: 3, md: 6 }}
        wrap="wrap"
        px={{ base: "4%", md: "8%", xl: "10%" }}
        pb={{ base: 8, md: 10 }}
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
      >
        {[
          "Eco-friendly detergents",
          "Soft-wash safe on render",
          "Pre-treat & post-rinse",
          "Fully insured technicians",
          "Stain & mould removal",
          "Driveways • Roofs • Solar",
        ].map((chip) => (
          <Box
            key={chip}
            px={3}
            py={2}
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="md"
          >
            <Text fontWeight="700" fontSize="sm" lineHeight="1.2">
              {chip}
            </Text>
          </Box>
        ))}
      </HStack>

      {/* Main content */}
      <HStack
        align="flex-start"
        justify="space-between"
        wrap="wrap"
        spacing={{ base: 8, md: 12 }}
        px={{ base: "4%", md: "8%", xl: "10%" }}
        pt={{ base: 8, md: 10 }}
        pb={{ base: 8, md: 12 }}
      >
        {/* Brand / About */}
        <VStack align="start" spacing={3} maxW={{ base: "100%", md: "420px" }}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="800">
            EverBright Pressure Washing Adelaide
          </Text>
          <Text color="whiteAlpha.800" lineHeight="1.8">
            We restore kerb appeal with professional pressure washing, soft-wash roof cleaning, gutter clearing, and solar panel cleans. Tough on grime, gentle on surfaces.
          </Text>
          <Text color="whiteAlpha.700">
            ABN · Adelaide SA • Residential & Commercial
          </Text>
        </VStack>

        {/* Services */}
        <VStack align="start" spacing={3} minW={{ md: "220px" }}>
          <Text fontWeight="800" mb={1}>
            Services
          </Text>
          {[
            "Driveway & path cleaning",
            "House wash (soft-wash)",
            "Roof, gutters & facias",
            "Decks, pergolas & fences",
            "Pavers & retaining walls",
            "Solar panel cleaning",
          ].map((s) => (
            <Text key={s} color="whiteAlpha.800">
              {s}
            </Text>
          ))}
        </VStack>

        {/* Service Areas */}
        <VStack align="start" spacing={3} minW={{ md: "240px" }}>
          <Text fontWeight="800" mb={1}>
            Service Areas
          </Text>
          <Text color="whiteAlpha.800">Adelaide Metro • Eastern Suburbs</Text>
          <Text color="whiteAlpha.800">Western Suburbs • North & South</Text>
          <Text color="whiteAlpha.800">Hills & Coastal (select suburbs)</Text>
        </VStack>

        {/* Contact / Hours */}
        <VStack align="start" spacing={3} minW={{ md: "260px" }}>
          <Text fontWeight="800" mb={1}>
            Book a Clean
          </Text>
          <Text color="whiteAlpha.900">
            <Text as="a" href="tel:+61123456789">Call: 0123&nbsp;456&nbsp;789</Text>
          </Text>
          <Text color="whiteAlpha.900">
            <Text as="a" href="mailto:hello@everbright.au">hello@everbright.au</Text>
          </Text>
          <Box pt={1}>
            <Text fontWeight="800">Hours</Text>
            <Text color="whiteAlpha.800">Mon–Sat · 7:30am–6:00pm</Text>
            <Text color="whiteAlpha.800">Sun · By appointment</Text>
          </Box>
        </VStack>
      </HStack>

      {/* CTA strip */}
      <Box
        mx={{ base: "4%", md: "8%", xl: "10%" }}
        mb={{ base: 8, md: 10 }}
        p={{ base: 4, md: 5 }}
        bgGradient="linear(to-r, #0b2a6b, #1363df)"
        borderRadius="lg"
      >
        <HStack justify="space-between" wrap="wrap" spacing={4}>
          <Text fontWeight="800" fontSize={{ base: "md", md: "lg" }}>
            Ready to bring back that “just-washed” look?
          </Text>
          <Text
            as="a"
            href="tel:+61123456789"
            px={4}
            py={3}
            bg="white"
            color="#0a0f29"
            borderRadius="md"
            fontWeight="800"
          >
            Get Your Free Quote
          </Text>
        </HStack>
      </Box>

      {/* Legal bar */}
      <HStack
        px={{ base: "4%", md: "8%", xl: "10%" }}
        justify="space-between"
        wrap="wrap"
        spacing={4}
      >
        <Text color="whiteAlpha.700" fontSize="sm">
          © {new Date().getFullYear()} EverBright Pressure Washing Adelaide. All rights reserved.
        </Text>
        <HStack spacing={4}>
          <Text as="a" href="/terms" color="whiteAlpha.800" fontSize="sm">
            Terms
          </Text>
          <Text as="a" href="/privacy" color="whiteAlpha.800" fontSize="sm">
            Privacy
          </Text>
          <Text as="a" href="/contact" color="whiteAlpha.800" fontSize="sm">
            Contact
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default FooterPressure;
