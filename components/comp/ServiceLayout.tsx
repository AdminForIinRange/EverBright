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
import ServicesBox from "@/components/comp/compsDeep/ServicesBox";
import ReviewSection from "@/components/comp/ReviewSection";

// ✅ NEW: import your de-dupe components
import QuoteButton from "@/components/comp/compsDeep/QuoteButton";
import BadgeItem from "@/components/comp/compsDeep/BadgeItem";
import PromiseItem from "@/components/comp/compsDeep/PromiseItem";
import SectionHeading from "@/components/comp/compsDeep/SectionHeading";


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

function ServiceLayout() {
  return (
    <>      <Box
          backgroundImage={` url('/images/aerial-city-adelaide.jpeg')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          position={"absolute"}
          backgroundAttachment="fixed"
          zIndex={-1}
          w={"100%"}
          h={["1900px", "1900px", "1900px", "1450px", "1450px", "1450px"]}
          opacity={0.5}
        ></Box>
        <Box
          position={"absolute"}
          zIndex={-1}
          w={"100%"}
          h={["1900px", "1900px", "1900px", "1450px", "1450px", "1450px"]}
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
          {/* Keeping this heading inline because eyebrow color differs in this section */}
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
        </HStack></>
  )
}

export default ServiceLayout