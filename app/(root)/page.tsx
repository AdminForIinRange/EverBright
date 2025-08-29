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
  const services = [
    {
      title: "Pressure Washing",
      image:
        "https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg",
      desc: "Deep-clean hard surfaces to remove grime, algae, and stubborn stains.",
    },
    {
      title: "Solar Cleaning",
      image:
        "https://images.pexels.com/photos/8853508/pexels-photo-8853508.jpeg",
      desc: "Maximize panel efficiency with streak-free, residue-free cleaning.",
    },
    {
      title: "Roof Cleaning",
      image:
        "https://images.pexels.com/photos/6474451/pexels-photo-6474451.jpeg",
      desc: "Safely lift moss and dark streaks to restore curb appeal.",
    },
    {
      title: "Gutter Cleaning",
      image:
        "https://images.pexels.com/photos/4894655/pexels-photo-4894655.jpeg",
      desc: "Clear debris to prevent overflow, leaks, and foundation damage.",
    },
    {
      title: "Window Cleaning",
      image:
        "https://images.pexels.com/photos/5852922/pexels-photo-5852922.jpeg",
      desc: "Crystal-clear glass inside and out for a brighter home.",
    },
    {
      title: "Softwashing",
      image:
        "https://images.pexels.com/photos/5691505/pexels-photo-5691505.jpeg",
      desc: "Low-pressure wash with eco detergents—safe for siding and paint.",
    },
    {
      title: "Commercial Jobs",
      image:
        "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
      desc: "Reliable large-scale cleaning tailored to business schedules.",
    },
    {
      title: "Driveway & Concrete",
      image:
        "https://images.pexels.com/photos/4870704/pexels-photo-4870704.jpeg",
      desc: "Remove oil spots and tire marks for a fresh, even finish.",
    },
  ];
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
        h={["500px", "500px", "500px", "500px", "850px", "850px"]}
        opacity={0.5}
      ></Box>
      <Box
        position={"absolute"}
        zIndex={-1}
        w={"100%"}
        h={["500px", "500px", "500px", "500px", "850px", "850px"]}
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
            color={"blue.400"}
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
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
          <Box
            my={["25px", "25px", "25px", "25px", "25px", "25px"]}
            w={["100%", "100%", "100%", "600px", "600px", "600px"]}
            borderWidth={"1px"}
          ></Box>
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
              <Text fontSize="lg" color="#4a5568" mb="6" lineHeight="1.8">
                At Luxe Managements, we believe that exceptional spaces are born
                from a perfect balance of aesthetics and functionality. Our
                furnishing and styling service transforms properties into
                captivating environments that resonate with discerning guests.
              </Text>
              <Text fontSize="lg" color="#4a5568" mb="8" lineHeight="1.8">
                Each project is approached with meticulous attention to detail,
                from the selection of statement furniture pieces to the curation
                of bespoke accessories that tell a cohesive story.
              </Text>
              <Box display="flex" alignItems="center" gap="3" mb="6">
                <Box w="30px" h="2px" bg="#0a0f29"></Box>
                <Text fontSize="lg" fontWeight="medium" color="#0a0f29">
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
                    w={["100%", "100%", "100%", "100", "100", "100"]}
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

      <Box pt={["50px", "50px", "50px", "100px", "100px", "100px"]}>
        <Box
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={"100%"}
          h={["500px", "500px", "500px", "500px", "1450px", "1450px"]}
          opacity={0.5}
        ></Box>
        <Box
          position={"absolute"}
          zIndex={-1}
          w={"100%"}
          h={["500px", "500px", "500px", "500px", "1450px", "1450px"]}
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
            fontWeight={700}
            lineHeight="1.6"
            color={"blue.200"}
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
          <Box
            my={["25px", "25px", "25px", "25px", "25px", "25px"]}
            w={["100%", "100%", "100%", "600px", "600px", "600px"]}
            borderWidth={"1px"}
          ></Box>
        </VStack>

        <HStack
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          py={"50px"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          {services.map((s) => (
            <ServicesBox key={s.title} title={s.title} image={s.image} />
          ))}
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
              color={"blue.400"}
              fontSize={["16px", "18px", "24px"]}
              fontFamily="poppins"
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
            <Box
              my={["25px", "25px", "25px", "25px", "25px", "25px"]}
              w={["100%", "100%", "100%", "600px", "600px", "600px"]}
              borderWidth={"1px"}
            ></Box>
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
                <Text fontSize="lg" color="#4a5568" mb="6" lineHeight="1.8">
                  At Luxe Managements, we believe that exceptional spaces are
                  born from a perfect balance of aesthetics and functionality.
                  Our furnishing and styling service transforms properties into
                  captivating environments that resonate with discerning guests.
                </Text>
                <Text fontSize="lg" color="#4a5568" mb="8" lineHeight="1.8">
                  Each project is approached with meticulous attention to
                  detail, from the selection of statement furniture pieces to
                  the curation of bespoke accessories that tell a cohesive
                  story.
                </Text>
                <Box display="flex" alignItems="center" gap="3" mb="6">
                  <Box w="30px" h="2px" bg="#0a0f29"></Box>
                  <Text fontSize="lg" fontWeight="medium" color="#0a0f29">
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
                      w={["100%", "100%", "100%", "100", "100", "100"]}
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
                ></Box>
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <ReviewSection />

      <HStack
        bg={"blue.100"}
        mt={["100px", "100px", "100px", "100px", "100px", "300px"]}
        py={"25px"}
      >
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            color={"blue.400"}
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
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

          <Box display="flex" justifyContent="center" h={"100%"} width="100%">
            <HStack
              justify={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
              align={"center"}
              w={"100%"}
              transition={"all 0.2s ease-in-out"}
              zIndex={4}
            >
              <Box
                w={["100%", "100%", "100%", "300px", "300px", "300px"]}
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
        </VStack>
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
            color={"blue.400"}
            fontSize={["16px", "18px", "24px"]}
            fontFamily="poppins"
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
          <Box
            my={["25px", "25px", "25px", "25px", "25px", "25px"]}
            w={["100%", "100%", "100%", "600px", "600px", "600px"]}
            borderWidth={"1px"}
          ></Box>
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
              <VStack
                fontFamily={"poppins"}
                justify={["center", "center", "center", "start", "start"]}
                align={["center", "center", "center", "start", "start"]}
              >
                <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                100% Satisfaction Guarantee – Or We Will Fix It!
                  </Span>
                </Text>
                <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                  We’ll Be On Time
                  </Span>
                </Text>

                 <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                  We Leave Things CLEAN
                  </Span>
                </Text>
                <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                  All Our Quotes Are Clear, Fast and No Obligation
                  </Span>
                </Text>
                    <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                 We Are Fully Insured and Police Cheaked
                  </Span>
                </Text>
                    <Text color="green.300" fontSize="34px" fontWeight={"700"}>
                  ✓{" "}
                  <Span color="black" fontSize={"20px"} fontWeight={"400"}>
                    {" "}
                 Only Professional Equipment
                  </Span>
                </Text>
                   
              </VStack>

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
                    w={["100%", "100%", "100%", "100", "100", "100"]}
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
              ></Box>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Page;
