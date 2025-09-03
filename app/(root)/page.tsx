"use client";
import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
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
import { Shield, Home, Leaf } from "lucide-react";
import About from "@/components/comp/About";

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

  // ✅ NEW: small data arrays to map the repeated items
  const badges = [
    {
      text: "100% Guarantee",
      icon: <Shield />,
    },
    {
      text: "Fully Insured",
      icon: <Shield />,
    },
    {
      text: "Locally Owned &",
      icon: <Home />,
    },
    {
      text: "ECO Friendly",
      icon: <Leaf />,
    },
  ];

  const promises = [
    "100% Satisfaction Guarantee – Or We Will Fix It!",
    "We’ll Be On Time",
    "We Leave Things CLEAN",
    "All Our Quotes Are Clear, Fast and No Obligation",
    "We Are Fully Insured and Police Cheaked",
    "Only Professional Equipment",
  ];

  return (
    <Box mt={"-100px"}>
      <HStack justifyContent={"center"} align={"center"} >
        
        <Box
          borderRadius={"50px"}
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={"98%"}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          opacity={1}
borderBottomRadius={"100px"}
        ></Box>
        <Box

          
          position={"absolute"}
          zIndex={-1}
          w={"98%"}
          h={["1650px", "1650px", "1650px", "1650px", "1650px", "1650px"]}
          bg="cyan.700"
          opacity={0.6}
          borderBottomRadius={"100px"}
        ></Box>


      </HStack>

      <HStack
        // data-aos="fade-up"

        zIndex={4}
        px={["0%", "3%", "6%", "6%", "6%", "15%"]}
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
                bg={["white", "white", "none", "none", "none", "none"]}
              >
                <HStack
                  justify="start"
                  align="start"
                  gap={["0px", "8px", "8px", "8px", "8px", "8px"]}
                  w={"100%"}
                >
                  {badges.map((badge, idx) => (
                    <BadgeItem key={idx} text={badge.text} icon={badge.icon} />
                  ))}
                </HStack>
              </Box>
            </HStack>
          </Box>
          <FreeQuote />
        </HStack>
      </HStack>

      <About />

      <Box pt={["50px", "50px", "50px", "100px", "100px", "100px"]}>
        <ServiceLayout />

        <Box mt={["100px", "100px", "100px", "100px", "100px", "300px"]}>
          {/* Another spot where SectionHeading matches your style */}
          <VStack
            justify={"center"}
            align={"center"}
            w={"100%"}
            textAlign={"center"}
            px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          >
            <SectionHeading
              eyebrow={`You'll be amazed at how good your property can look!`}
              title="Adelaide Exterior Cleaning"
              color="bule.100"
            />
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
                    Shayal - Owner
                  </Text>

                  <Box position="absolute">
                    <Image src={Shayal} alt="Shayal" />
                  </Box>
                </Box>

                <HStack
                  alignItems="center"
                  w={"100%"}
                  justifyContent={[
                    "center",
                    "center",
                    "center",
                    "start",
                    "start",
                    "start",
                  ]}
                >
                  <QuoteButton />
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>

      <ReviewSection />

      <HStack bg={"blue.700"} py={"25px"}>
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            fontSize={["30px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="white"
            lineHeight="1.1"
          >
            Ready to bring your home back to life
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
              {/* ✅ CTA again */}
              <QuoteButton />
            </HStack>
          </Box>
        </VStack>
      </HStack>

      <Box bg={"blue.800"} py={"100px"}>
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          {/* This heading differs (no eyebrow), so we keep as-is */}
          <Text
            fontSize={["36px", "48px", "56px"]}
            fontWeight={700}
            fontFamily="poppins"
            color="white"
            lineHeight="1.1"
          >
            What We Promise
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
          my={["25px", "50px", "50px", "50px", "50px", "100px"]}
        >
          <HStack
            justify={"center"}
            align={["center", "center", "start", "start", "start", "start"]}
            w={"100%"}
            h={"100%"}
            gap={["15px", "15px", "15px", "50px", "50px", "50px"]}
            wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          >
            <Box w={["100%", "100%", "100%", "600px", "600px", "600px"]}>
              <VStack
                fontFamily={"poppins"}
                justify={["start", "start", "start", "start", "start"]}
                align={["start", "start", "start", "start", "start"]}
                gap={"16px"}
              >
                {/* ✅ Map promise lines instead of repeating */}
                {promises.map((p) => (
                  <PromiseItem key={p} text={p} />
                ))}
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
                  {/* ✅ Final CTA */}
                  <QuoteButton />
                </HStack>
              </Box>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Page;
