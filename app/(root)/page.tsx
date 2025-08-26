"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/images/aerial-city-adelaide.jpeg";
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import HeroText from "@/components/comp/HeroText";
import ImageCompareSlider from "@/components/comp/ImageCompareSlider";
import router from "next/router";
import ServicesBox from "@/components/comp/ServicesBox";
import ReviewSection from "@/components/comp/ReviewSection";
const Page = () => {
  return (
    <Box>
      <Box
        backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        position={"absolute"}
        backgroundAttachment="fixed"
        zIndex={-1}
        w={"100%"}
        h={["100vh", "100vh", "100vh", "100vh", "100vh", "100vh"]}
        opacity={0.5}
      ></Box>
      <Box
        position={"absolute"}
        zIndex={-1}
        w={"100%"}
        h={["100vh", "100vh", "100vh", "100vh", "100vh", "100vh"]}
        bg="blue.800"
        opacity={0.7}
      ></Box>

      <HStack
        // data-aos="fade-up"

        zIndex={4}
        px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          mt={"100px"}
          justify={"center"}
          align={["center", "center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
            <HeroText />

            <HStack
              w={"100%"}
              justify={[
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
              ]}
              align={["center", "center", "center", "start", "start", "start"]}
            >
              <Box
                mt={"20px"}
                bg={"white"}
                h={"100%"}
                px={"20px"}
                w={"fit-content"}
                borderRadius={"18px"}
              >
                <HStack justify={"center"} align={"center"} gap={"0px"}>
                  <VStack p={4} w={"100px"}>
                    <Box bg={"red"} p={4}>
                      <Image src={Google} alt="Google" width="50" />
                    </Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"12px"}
                      fontWeight={"500"}
                      fontFamily={"poppins"}
                    >
                      100% Satisfaction
                    </Text>
                  </VStack>
                  <VStack p={4} w={"100px"}>
                    <Box bg={"red"} p={4}>
                      <Image src={Google} alt="Google" width="50" />
                    </Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"12px"}
                      fontWeight={"500"}
                      fontFamily={"poppins"}
                    >
                      Fully Insured
                    </Text>
                  </VStack>
                  <VStack p={4} w={"100px"}>
                    <Box bg={"red"} p={4}>
                      <Image src={Google} alt="Google" width="50" />
                    </Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"12px"}
                      fontWeight={"500"}
                      fontFamily={"poppins"}
                    >
                      Locally Owned &
                    </Text>
                  </VStack>
                  <VStack p={4} w={"100px"}>
                    <Box bg={"red"} p={4}>
                      <Image src={Google} alt="Google" width="50" />
                    </Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"12px"}
                      fontWeight={"500"}
                      fontFamily={"poppins"}
                    >
                      ECO Friendly
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <FreeQuote />
        </HStack>
      </HStack>

      <Box mt={["100px", "100px", "100px", "100px", "100px", "300px"]}>
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
            color="bule.100"
            fontWeight={700}
            lineHeight="1.6"
          >
            You'll be amazed at how good your property can look!
          </Text>
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="bule.100"
            lineHeight="1.1"
          >
            Adelaide Exterior Cleaning
          </Text>
        </VStack>

        <HStack
          zIndex={3}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          justify={"center"} // !!
          align={"center"}
          w={"100%"}
          h={"100%"}
          my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        >
          <HStack
            justify={"center"}
            align={["center", "center", "start", "start", "start", "start"]}
            w={"100%"}
            h={"100%"}
            gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
              <Text fontSize="md" color="#4a5568" mb="6" lineHeight="1.8">
                At Luxe Managements, we believe that exceptional spaces are born
                from a perfect balance of aesthetics and functionality. Our
                furnishing and styling service transforms properties into
                captivating environments that resonate with discerning guests.
              </Text>
              <Text fontSize="md" color="#4a5568" mb="8" lineHeight="1.8">
                Each project is approached with meticulous attention to detail,
                from the selection of statement furniture pieces to the curation
                of bespoke accessories that tell a cohesive story.
              </Text>
              <Box display="flex" alignItems="center" gap="3" mb="6">
                <Box w="30px" h="2px" bg="#0a0f29"></Box>
                <Text fontSize="md" fontWeight="medium" color="#0a0f29">
                  Elevating spaces. Creating experiences.
                </Text>
              </Box>
              <Box display="flex" justifyContent="start" width="100%">
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
                    w={["100%", "100%", "100%", "auto", "auto", "auto"]}
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
              </Box>
            </Box>

            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
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
                h={["350px", "350px", "350px", "500px", "500px", "500px"]}
                w={["100%", "100%", "100%", "550px", "550px", "550px"]}
                borderRadius="30px"
                bg="gray.200" // fallback background color
                overflow="hidden" // clip the Image to the rounded corners
              >
                <ImageCompareSlider />
              </Box>
            </Box>
          </HStack>
        </HStack>
      </Box>

      <Box
      
        pt={["50px", "50px", "50px", "100px", "100px", "100px"]}
      >
        <Box
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={"100%"}
          h={["150vh", "150vh", "150vh", "150vh", "150vh", "150vh"]}
          opacity={0.5}
        ></Box>
        <Box
          position={"absolute"}
          zIndex={-1}
          w={"100%"}
  h={["150vh", "150vh", "150vh", "150vh", "150vh", "150vh"]}
          bg="blue.800"
          opacity={0.7}
        ></Box>
        <VStack
          mt={"50px"}
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
            color="white"
            fontWeight={700}
            lineHeight="1.6"
          >
            You'll be amazed at how good your property can look!
          </Text>
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="white"
            lineHeight="1.1"
          >
            How Can We Help Restore Your Property?
          </Text>
        </VStack>

        <HStack
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          py={"50px"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <ServicesBox
            title={"Exterior Cleaning"}
            image={
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
        </HStack>


      <Box mt={["100px", "100px", "100px", "100px", "100px", "300px"]}>
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
            color="bule.100"
            fontWeight={700}
            lineHeight="1.6"
          >
            You'll be amazed at how good your property can look!
          </Text>
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="bule.100"
            lineHeight="1.1"
          >
            Adelaide Exterior Cleaning
          </Text>
        </VStack>

        <HStack
          zIndex={3}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          justify={"center"} // !!
          align={"center"}
          w={"100%"}
          h={"100%"}
          my={["50px", "50px", "50px", "50px", "50px", "100px"]}
        >
          <HStack
            justify={"center"}
            align={["center", "center", "start", "start", "start", "start"]}
            w={"100%"}
            h={"100%"}
            gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box w={["95%", "95%", "95%", "600px", "600px", "600px"]}>
              <Text fontSize="md" color="#4a5568" mb="6" lineHeight="1.8">
                At Luxe Managements, we believe that exceptional spaces are born
                from a perfect balance of aesthetics and functionality. Our
                furnishing and styling service transforms properties into
                captivating environments that resonate with discerning guests.
              </Text>
              <Text fontSize="md" color="#4a5568" mb="8" lineHeight="1.8">
                Each project is approached with meticulous attention to detail,
                from the selection of statement furniture pieces to the curation
                of bespoke accessories that tell a cohesive story.
              </Text>
              <Box display="flex" alignItems="center" gap="3" mb="6">
                <Box w="30px" h="2px" bg="#0a0f29"></Box>
                <Text fontSize="md" fontWeight="medium" color="#0a0f29">
                  Elevating spaces. Creating experiences.
                </Text>
              </Box>
              <Box display="flex" justifyContent="start" width="100%">
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
                    w={["100%", "100%", "100%", "auto", "auto", "auto"]}
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
              </Box>
            </Box>

            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
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
                h={["350px", "350px", "350px", "500px", "500px", "500px"]}
                w={["100%", "100%", "100%", "550px", "550px", "550px"]}
                borderRadius="30px"
                bg="gray.200" // fallback background color
                overflow="hidden" // clip the Image to the rounded corners
              >
               
              </Box>
            </Box>
          </HStack>
        </HStack>
      </Box>

      </Box>
      <ReviewSection />
    </Box>
  );
};

export default Page;
