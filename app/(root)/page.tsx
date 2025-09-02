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
    "100% Satisfaction",
    "Fully Insured",
    "Locally Owned &",
    "ECO Friendly",
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
        h={["850px", "850px", "850px", "850px", "850px", "850px"]}
        opacity={0.5}
      ></Box>
      <Box
        position={"absolute"}
        zIndex={-1}
        w={"100%"}
        h={["850px", "850px", "850px", "850px", "850px", "850px"]}
        bg="blue.900"
        opacity={0.7}
      ></Box>

      <HStack
        // data-aos="fade-up"
        zIndex={4}
        px={["0%", "3%", "6%", "6%", "6%", "10%"]}
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
          <Box w={["100%", "100%", "100%", "600px", "600px", "600px"]}>
            <HeroText />

            <HStack
              px={["0%", "0%", "6%", "6%", "6%", "10%"]}
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
                p={["0px", "0px", "20px", "20px", "20px", "20px"]}
                w={[
                  "100%",
                  "100%",
                  "fit-content",
                  "fit-content",
                  "fit-content",
                  "fit-content",
                ]}
                borderRadius={["0px", "30px", "30px", "30px", "30px", "30px"]}
              >
                <HStack justify={"center"} align={"center"} gap={"0px"}>
                  {/* ✅ NEW: map your BadgeItem instead of 4 copies */}
                  {badges.map((label) => (
                    <BadgeItem key={label} label={label} />
                  ))}
                </HStack>
              </Box>
            </HStack>
          </Box>
          <FreeQuote />
        </HStack>
      </HStack>

      <Box mt={["100px", "100px", "100px", "100px", "100px", "300px"]}>
        {/* ✅ Example of using SectionHeading where styling matches */}
        <VStack
          justify={"center"}
          align={"center"}
          w={"100%"}
          textAlign={"center"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <SectionHeading
            eyebrow={`You'll be amazed at how good your property can look!`}
            title="Restoring Your Most
Valuable Asset"
            color="bule.400"
          />
        </VStack>

        <HStack
          zIndex={3}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
          justify={"center"} // !!
          align={"center"}
          w={"100%"}
          h={"100%"}
          my={["0px", "50px", "50px", "50px", "50px", "100px"]}
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
              <Text fontSize="lg" color="black" mb="6" lineHeight="1.8">
                Your home works hard, facing Adelaide’s harsh sun, heavy rains,
                and winter winds. Over time, dirt, mould, and grime build up on
                walls, roofs, driveways, and gutters.
              </Text>
              <Text fontSize="lg" color="black" mb="8" lineHeight="1.8">
                At EverBright Pressure Washing Adelaide, we provide professional
                pressure washing, gutter cleaning, roof washing, and solar panel
                cleaning to restore your property’s beauty and protect it for
                years to come. We don’t just wash away mess — we restore pride,
                protect your investment, and bring back that “wow” factor every
                time you pull into your driveway.
              </Text>

              <Text fontSize="lg" color="black" mb="8" lineHeight="1.8">
                Regular exterior cleaning isn’t just about curb appeal — it
                prevents damage, avoids costly repairs, and keeps your home
                strong for years.
              </Text>

              <Text fontSize="lg" color="black" mb="8" lineHeight="1.8">
                We’re fast, reliable, and eco-friendly — tough on stains, gentle
                on your property. When you choose EverBright, you’re not just
                getting a clean — you’re giving your home the care it deserves.
              </Text>
              <Box display="flex" alignItems="center" gap="3" mb="6">
                <Text fontSize="lg" fontWeight="700" color="#0a0f29">
                  Call today for a FREE QUOTE and see why Adelaide homeowners
                  trust EverBright Pressure Washing for remarkable results.
                </Text>
              </Box>
             
              
              <HStack alignItems="center" w={"100%"}  justifyContent={["center", "center", "center", "start", "start", "start"]} >

                <QuoteButton />
              </HStack>
        
            </Box>

            <Box
              position="relative"
              h={["350px", "350px", "350px", "500px", "500px", "600px"]}
              w={["95%", "95%", "95%", "600px", "600px", "600px"]}
              borderRadius="30px"
              bgPos="center"
              bgSize="cover"
              overflow="hidden"
              display={"flex"}
              justifyContent={"end"}
            >
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

                    <Box position="absolute" >
                  <Image src={Shayal} alt="Shayal" />
                </Box>
                </Box>

              
           <HStack alignItems="center" w={"100%"}  justifyContent={["center", "center", "center", "start", "start", "start"]} >

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
