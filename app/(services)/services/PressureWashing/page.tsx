"use client";
import FreeQuote from "@/components/comp/FreeQuote";
import FAQ from "@/components/globalComponents/FAQ";
import { Box, HStack, Span, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import router from "next/router";
import React from "react";

const PressureWashing = () => {
  return (
    <Box bg="white">
      {/* HERO */}
      <Box bg="#02173a" py={{ base: "25px", md: "36px" }}>
        <Box mx="auto" px={{ base: "4%", md: "6%", lg: "10%" }}>
          <Text
            mt={{ base: "32px", md: "40px" }}
            color="white"
            lineHeight="1.1"
            textAlign="start"
            fontWeight="700"
            fontFamily="poppins"
            fontSize={{ base: "20px", md: "36px", lg: "48px" }}
          >
            A Clean Home Feels Like a New Home
          </Text>
          <Text
            color="white"
            mt={{ base: "12px", md: "16px" }}
            textAlign="start"
            fontFamily="poppins"
            fontSize={{ base: "12px", md: "14px" }}
          >
            <span style={{ color: "#FFC107" }}>home - services - </span>
            pressure washing
          </Text>
        </Box>
      </Box>














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
          <Box w={["95%", "95%", "95%", "600px", "600px", "100%"]}>
      
                     <Text
              color="#FFC107"
              mt={{ base: "8px", md: "0" }}
              textAlign="start"
              fontFamily="poppins"
              fontSize={{ base: "13px", md: "18px" }}
            >
              High Pressure Cleaning Adelaide
            </Text>
            <Text
                          fontSize={{ base: "22px", md: "38px", lg: "42px" }}
              w={["100%", "100%", "100%", "100%", "100%", "100%"]}
            
              fontWeight={600}
              fontFamily={"arial"}
              bgClip="text"
              textAlign={["center", "center", "center", "left", "left", "left"]}
              color={"black"}
              bgGradient="linear(to-r, teal, blue)"
            >
    Expert Pressure Cleaning Services in Adelaide
            </Text>

       
            <Text
              fontFamily="poppins"
              w="100%"
              textAlign="start"
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "1.7", md: "1.85" }}
              mt={{ base: "6px", md: "10px" }}
            >
           
              <br />
              With a deep understanding of Adelaide’s unique climate and
              environment, we ensure the highest quality results while
              protecting your property’s structural integrity. Trust in our
              no-hassle satisfaction guarantee and let Calibre Exterior Cleaning
              bring new life to your home or business. Request a quote today and
              uncover the unparalleled benefits of Adelaide’s leading pressure
              cleaning experts!
              <br />
              <br />
              <Span fontWeight="700">
                Bring new life to your home or business. Request a quote today
                and uncover the unparalleled benefits of Adelaide’s leading
                pressure cleaning experts!
              </Span>
            </Text>

                   <VStack
              fontFamily="poppins"
              gap="4px"
              justify="start"
              align="start"
              w="100%"
              mt={{ base: "6px", md: "10px" }}
            >
              {[
                "Pressure Cleaning",
                "Driveway & Pathway Cleaning",
                "House & Roof Washing",
                "Commercial Exterior Cleaning",
              ].map((label) => (
                <Text
                  key={label}
                  color="black"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="700"
                >
                  ✓{" "}
                  <Span color="black" fontWeight="normal">
                    {label}
                  </Span>
                </Text>
              ))}

              
            </VStack>

            {/* desktop-friendly media/cta panel */}
    
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
              zIndex={3}
            >
              <Box
                my={"25px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={["center"]}
                gap={"15px"}
                fontFamily={"arial"}
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
                bg={"black"}
                color={"white"}
                rounded={"30px"}
                px={"12"}
                fontWeight={"500"}
                onClick={() => router.push("/about/journey")}
              >
         Arrange a Free Quote Today!
                {/* <Icon as={ArrowRight}> </Icon> */}
              </Box>
            </HStack>

            
          </Box>

          <Box
            position="relative"
            h={["350px", "350px", "350px", "500px", "500px", "800PX"]}
            w={["95%", "95%", "95%", "600px", "600px", "900px"]}
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
              h={["350px", "350px", "350px", "500px", "500px", "800PX"]}
              w={["100%", "100%", "100%", "550px", "550px", "550px"]}
              borderRadius="30px"
              bg="gray.200" // fallback background color
              overflow="hidden" // clip the Image to the rounded corners
            >
              <Image
                quality={70}
                loading="lazy"
                src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
                alt="Furnishing and Styling Image"
                fill // makes the image fill the Box completely
                style={{
                  objectFit: "cover", // replicates background-size: cover
                  objectPosition: "center", // replicates background-position: center
                }}

                // optional: preload if above the fold
              />
            </Box>
          </Box>
        </HStack>
      </HStack>

<FAQ type={""} />





    </Box>
  );
};

export default PressureWashing;
