import { Box, Text, HStack, VStack, Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({
  name,
  date,
  reviewText,
  stars,
  platform,
  avatar,
  verified = false,
}) => (
  <Box
    bg="white"
    p="6"
    borderRadius="2xl"
    border="3px solid"
    borderColor="gray.50"
    minW={{ base: "500px", md: "500px" }}
    maxW="340px"
    position="relative"
    transition="all 0.3s ease"
    _hover={{
      transform: "translateY(-4px)",
    }}
  >
    {/* Platform Icon */}

    <VStack spacing="5" align="start">
      {/* Profile and Name */}
      <HStack spacing="4">
        <Box
          w="52px"
          h="52px"
          bgGradient="linear(135deg, #667eea, #764ba2)"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xl"
          fontWeight="bold"
          color="white"
          boxShadow="0 4px 12px rgba(102, 126, 234, 0.3)"
        >
          {!avatar && name.charAt(0)}
        </Box>
        <VStack spacing="1" align="start">
          <HStack spacing="2" align="center">
            <Text fontWeight="700" fontSize="md" color="gray.800">
              {name}
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            {date}
          </Text>
        </VStack>
      </HStack>

      {/* Stars */}
      <HStack spacing="1" py={"4"}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={18}
            color={index < stars ? "#F6AD55" : "#E2E8F0"}
            style={{
              filter:
                index < stars
                  ? "drop-shadow(0 1px 2px rgba(246, 173, 85, 0.3))"
                  : "none",
            }}
          />
        ))}
      </HStack>

      {/* Review Text */}
      <Text
        fontSize="sm"
        color="gray.600"
        lineHeight="1.6"
        letterSpacing="0.01em"
      >
        {reviewText}
      </Text>
    </VStack>
  </Box>
);

const ReviewSection = () => {
  return (
    <Box
      bg={"blue.800"}
      bgGradient="linear(180deg, #f7fafc, #edf2f7)"
      py={{ base: "10", md: "16" }}
    >
      <Box mt={["50px", "100px", "100px", "100px", "100px", "300px"]}>
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="white"
            lineHeight="1.1"
          >
            Read some of our reviews
          </Text>
          <Box
            my={["25px", "25px", "25px", "25px", "25px", "25px"]}
            w={["100%", "100%", "100%", "600px", "600px", "600px"]}
            borderWidth={"1px"}
          ></Box>
        </VStack>
      </Box>
      <Box maxW="7xl" mx="auto" px={{ base: "4", md: "8" }}>
        {/* Header Section */}


        {/* Reviews Grid/Scroll */}
        <Box position="relative">
          <Flex
            overflowX="auto"
            gap="8"
            pb="6"
            css={{
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(0, 0, 0, 0.05)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "linear-gradient(135deg, #CBD5E0, #A0AEC0)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "linear-gradient(135deg, #A0AEC0, #718096)",
              },
            }}
          >
            <ReviewCard
              name="Jill Bills"
              date="30 June 2025"
              reviewText="The Calibre team was excellent. Polite and on time service before and after photos that clearly showed the results. Very happy"
              stars={5}
              platform="google"
              verified={true}
              avatar={undefined}
            />
            <ReviewCard
              name="Trevor Smith"
              date="26 June 2025"
              reviewText="Caleb was a very hard-working deliverer of a great service...hard to believe the before and after photos highly recommend this pressure clean service."
              stars={5}
              platform="google"
              verified={true}
              avatar={undefined}
            />
            <ReviewCard
              name="Robert Swann"
              date="11 January 2025"
              reviewText="Great job done cleaning Solar panels and Gutters. Fantastic, prompt and friendly service. Highly recommend them for jobs."
              stars={5}
              platform="facebook"
              verified={false}
              avatar={undefined}
            />
            <ReviewCard
              name="Sarah Johnson"
              date="15 June 2025"
              reviewText="Outstanding service! The team was professional, punctual, and delivered exceptional results. Will definitely use again."
              stars={5}
              platform="google"
              verified={true}
              avatar={undefined}
            />
            <ReviewCard
              name="Mike Wilson"
              date="8 June 2025"
              reviewText="Excellent work on our driveway cleaning. The difference is remarkable. Highly recommend their services!"
              stars={5}
              platform="facebook"
              verified={false}
              avatar={undefined}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewSection;
