import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";

const SlindingBanner = () => {
  return (
    <>
      <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
        <Box
          position="relative"
          h={{ base: "550px", md: "100%", xl: "100%" }}
          w={{ base: "100%", md: "100%" }}
          display="flex"
          justifyContent="end"
        >
          <Box
            position="relative"
            h={{ base: "100%", md: "100%" }}
            w={{ base: "100%", md: "100%" }}
            // subtle gradient border frame

            borderRadius="30px"
            bgGradient="linear(to-br, blue.100, white)"
          >
            <Box
              borderRadius={"50px"}
              backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
              h="400px"
              w="100%"
              overflow="hidden"
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SlindingBanner;
