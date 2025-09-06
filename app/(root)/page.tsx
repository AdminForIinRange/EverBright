"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import Google from "@/public/Google.png";
import Adl from "@/public/Shayal.png";
import Shayal from "@/public/Shayal.png"; // <-- Add this line (update path/filename as needed)
import { FaStar } from "react-icons/fa";
import FreeQuote from "@/components/comp/FreeQuote";
import HeroText from "@/components/comp/HeroText";
import ImageCompareSlider from "@/components/comp/ImageCompareSlider";
import router from "next/router";
import ServicesBox from "@/components/comp/compsDeep/ServicesBox";
import ReviewSection from "@/components/comp/ReviewSection";

// ✅ NEW: import your de-dupe components
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import BadgeItem from "@/components/comp/compsDeep/BadgeItem";
import PromiseItem from "@/components/comp/compsDeep/PromiseItem";
import SectionHeading from "@/components/comp/compsDeep/SectionHeading";
import ServiceLayout from "@/components/comp/ServiceLayout";

import About from "@/components/comp/About";
import SlidingCard from "@/components/comp/SlidingCard";
import SlindingBanner from "@/components/comp/SlindingBanner";

import icon1 from "@/public/images/Icons/1.png";
import icon2 from "@/public/images/Icons/2.png";
import icon3 from "@/public/images/Icons/3.png";
import icon4 from "@/public/images/Icons/4.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // ✅ NEW: small data arrays to map the repeated items
  const badges = [
    {
      text: "100% Guarantee",
      Images: icon1,
    },
    {
      text: "Fully Insured",
      Images: icon2,
    },
    {
      text: "Locally Owned",
      Images: icon3,
    },
    {
      text: "ECO Friendly",
      Images: icon4,
    },
  ];

  return (
    <Box mt={"-100px"}>
      <HStack justifyContent={"center"} align={"center"}>
        <Box
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          opacity={1}
          borderBottomRadius={[
            "50px",
            "150px0px",
            "100px",
            "100px",
            "100px",
            "100px",
          ]}
        ></Box>
        <Box
          position={"absolute"}
          zIndex={-1}
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          bg="cyan.700"
          opacity={0.6}
          borderBottomRadius={[
            "50px",
            "50px",
            "100px",
            "100px",
            "100px",
            "100px",
          ]}
        ></Box>
      </HStack>

      <HStack
        // data-aos="fade-up"

        zIndex={4}
        px={["3%", "3%", "6%", "6%", "6%", "15%"]}
        justify={"center"} // !!
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <HStack
          mt={"150px"}
          justify={"center"}
          align={["center", "center", "center", "start", "start", "start"]}
          w={"100%"}
          h={"100%"}
          gap={["15px", "15px", "15px", "50px", "50px", "100px"]}
          wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        >
          <Box w={["100%", "100%", "100%", "100%", "100%", "100%"]}>
            <HeroText />

            <HStack
              p={["5px", "5px", "0px", "0px", "0px", "0px"]}
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
                rounded={"10px"}
                h={"100%"}
                p={["5px", "5px", "10px", "10px", "10px", "10px"]}
                w={["100%", "100%", "100%", "100%", "100%", "100%"]}
                borderRadius={["30px", "30px", "30px", "30px", "30px", "30px"]}
                bg={["#062042", "#062042", "none", "none", "none", "none"]}
              >
                <HStack
                  justify="start"
                  align="start"
                  gap={["0px", "8px", "8px", "8px", "8px", "8px"]}
                  w={"100%"}
                >
                  {badges.map((badge, idx) => (
                    <BadgeItem
                      key={idx}
                      text={badge.text}
                      image={badge.Images}
                    />
                  ))}
                </HStack>
              </Box>
            </HStack>
          </Box>
          <FreeQuote />
        </HStack>
      </HStack>

      <About />

      {/* <SlindingBanner /> */}

      <Box pt={["50px", "50px", "50px", "100px", "100px", "100px"]}>
        <ServiceLayout />

        <Box mt={["25px", "25px", "25px", "100px", "100px", "100px"]}>
          {/* Another spot where SectionHeading matches your style */}
          <VStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            textAlign={"center"}
            px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          >
            <SectionHeading
              eyebrow={`EVERBRIGHT PRESSURE WASHING`}
              title="A Local Business you can rely on"
              color="blue.900"
            />
          </VStack>

          <HStack
            zIndex={3}
            px={{ base: "4%", md: "6%", xl: "10%" }}
            justify="center"
            align="center"
            w="100%"
            my={{ base: "0px", md: "50px", xl: "100px" }}
          >
            <HStack
              justify="center"
              align={{ base: "center", md: "start" }}
              w="100%"
              gap={{ base: "15px", md: "50px" }}
              flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            >
              {/* Copy card */}
              <Box w={{ base: "100%", md: "100%" }}>
                <VStack
                  h={"100%"}
                  align="start"
                  color="gray.800"
                  fontSize="lg"
                  lineHeight="1.8"
                  fontFamily={"poppins"}
                >
                  <Text>
                    I started EverBright Pressure Washing here in South
                    Australia with one simple goal — to help homeowners feel
                    proud of their property, whether that means restoring it to
                    its best or keeping it looking great all year round.
                  </Text>

                  <Text>
                    <br />
                    From day one, I’ve treated every home as if it were my own —
                    offering honest, transparent advice, paying close attention
                    to detail, and making sure the job’s done right the first
                    time.
                  </Text>

                  <Text>
                    <br />
                    I’ve built a small, dedicated team who share that same
                    approach. We know life is busy — so let us take care of the
                    dirty work, giving you more time to enjoy the things that
                    matter most.
                  </Text>

                  {/* quick-hit trust chips */}

                  {/* CTA line */}
                  <Box pt={2}>
                    <Text
                      fontFamily={"poppins"}
                      fontWeight="700"
                      color="#0a0f29"
                      mb={3}
                    >
                      Shayal - Owner
                    </Text>
                  </Box>
                  <Box
                    overflow={"hidden"}
                    top={4900}
                    left={-200}
                    bottom={0}
                    zIndex={-1}
                    pos={"absolute"}
                    w={"1000px"}
                    h={"1000px"}
                    bg={"white"}
                    borderRadius={"full"}
                  ></Box>
                </VStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>

      <Box mt={["250px", "25px", "25px", "100px", "100px", "100px"]}></Box>
      <ReviewSection />

      <Box
        bg={"cyan.500"}
        py={"20px"}
        px={["3%", "3%", "6%", "6%", "6%", "15%"]}
      >
        <VStack justify="left" align="left" textAlign="left" w="100%">
          <Text
            fontSize={["40px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            lineHeight="1.1"
            color={"white"}
          >
            Ready To Bring Your Home Back To Life
          </Text>
        </VStack>
      </Box>

      <Box py={"50px"} px={["3%", "3%", "6%", "6%", "6%", "15%"]}>
        <VStack justify="left" align="left" textAlign="left" w="100%">
          <Text
            fontSize={["40px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="arial"
            lineHeight="1.1"
            color={"cyan.900"}
          >
            What we promise
          </Text>

          <VStack
            mt={"20px"}
            fontWeight={"500"}
            gap={"10px"}
            justify={"start"}
            align={"start"}
            w={"100%"}
            fontFamily={"poppins"}
          >
            <Text color={"cyan.500"} fontWeight={"500"} fontSize="15px">
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                100% Satisfaction Guarantee
              </Span>
            </Text>

            <Text color={"cyan.500"} fontWeight={"500"} fontSize="15px">
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                Always On Time
              </Span>
            </Text>
            <Text color={"cyan.500"} fontWeight={"500"} fontSize="15px">
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                Only Professional-Grade Equipment
              </Span>
            </Text>
            <Text color={"cyan.500"} fontWeight={"500"} fontSize="15px">
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                Fully Insured
              </Span>
            </Text>
            <Text fontWeight={"500"} fontSize="15px" color={"cyan.500"}>
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                Professional, Reliable & Efficient Service
              </Span>
            </Text>
            <Text color={"cyan.500"} fontWeight={"500"} fontSize="15px">
              ✓{" "}
              <Span color={"black"} fontWeight={"600"}>
                {" "}
                We Leave Things CLEAN
              </Span>
            </Text>
          </VStack>
        </VStack>
      </Box>

      <Box
        my={"50px"}
        display={["block", "block", "none", "none", "none", "none"]}
      >
        <FreeQuote />
      </Box>
    </Box>
  );
};

export default Page;
