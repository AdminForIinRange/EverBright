import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";

function ServicesBox({ title, image }: { title: string; image: string }) {
  return (
    <Box
      w={{ base: "100%", md: "320px", lg: "480px" }}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        bg="white"
        rounded="xl"
        overflow="hidden"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        border="1px solid"
        borderColor="Blue.500"
        transition="all 0.3s ease"
      >
        <Box
          position="relative"
          h={{ base: "180px", md: "260px" }}
          w="100%"
          overflow="hidden"
        >
          <Image
            quality={80}
            loading="lazy"
            src={image || "/placeholder.svg"}
            alt={`${title} service`}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
          />

          <Box position="absolute" bottom="0" left="0" right="0" p="4">
            <Text
           
              color="white"
              fontSize={{ base: "lg", md: "25px" }}
              fontWeight="700"
              textAlign="START"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
              fontFamily="poppins"
            >
              {title}
            </Text>
            <Text
              py={"10px"}
              color="white"
              fontSize={{ base: "lg", md: "md" }}
            
              textAlign="START"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
              fontFamily="poppins"
            >
              Comprehensive management service including all our offerings.
            </Text>

            <HStack spacing="3" w="300px" position="RELATIVE">
              <Link
                href={"/services/PressureWashing"}
                flex="1"
                py="2"
                px="2"
                bg="white"
                color="black"
                rounded="lg"
                fontSize="sm"
                fontWeight="600"
                textAlign="center"
                textDecoration="none"
                transition="all 0.2s ease"
                _hover={{
                  bg: "cyan.600",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                <Text textAlign={"center"} w={"100%"}>
                  Get a Quote
                </Text>
              </Link>

              <Link
                href={"/services/PressureWashing"}
                flex="1"
                py="2"
                px="2"
                bg="cyan.500"
                color="white"
                rounded="lg"
                fontSize="sm"
                fontWeight="600"
                textAlign="center"
                textDecoration="none"
                transition="all 0.2s ease"
                _hover={{
                  bg: "cyan.600",
                  textDecoration: "none",
                  transform: "translateY(-1px)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
              >
                <Text textAlign={"center"} w={"100%"}>
                  Learn More
                </Text>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesBox;
