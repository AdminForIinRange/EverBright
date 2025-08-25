import { Box, HStack, Span, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PressureWashing = () => {
  return (
    <Box>
      <Box>
        <VStack>
          <Box w={"100%"} fontFamily={"poppins"} bg={"#02173a"} py={"25px"}>
            <Text
              mt={"50px"}
              px={["4%", "4%", "6%", "6%", "6%", "10%"]}
              color={"white"}
              lineHeight={"0.9"}
              textAlign={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              fontSize={"20px"}
            >
              A Clean Home Feels Like a New Home
            </Text>
            <Text
              px={["4%", "4%", "6%", "6%", "6%", "10%"]}
              color={"White"}
              mt={"20px"}
              textAlign={"start"}
              fontFamily={"poppins"}
              fontSize={"12px"}
            >
              <span style={{ color: "#FFC107" }}>home - services - </span>
              pressure washing
            </Text>
          </Box>
        </VStack>

        <VStack
          justify={"start"}
          align={"start"}
          px={["4%", "4%", "6%", "6%", "6%", "10%"]}
        >
          <Text
            color={"#FFC107"}
            mt={"20px"}
            textAlign={"start"}
            fontFamily={"poppins"}
            fontSize={"13px"}
          >
            High Pressure Cleaning Adelaide
          </Text>
          <Text
            fontWeight={"600"}
            textAlign={"start"}
            fontFamily={"poppins"}
            fontSize={"24px"}
            borderBottom={"1px solid #02173a"}
          >
            Expert Pressure Cleaning Services in Adelaide
          </Text>

          <Text
            fontFamily={"poppins"}
            w={"100%"}
            textAlign={"start"}
            fontSize="14px"
            mt={"20px"}
          >
            Experience “100% Risk-Free Pressure Cleaning” from Calibre Exterior
            Cleaning, Adelaide’s premier exterior cleaning specialists. Our
            local team of skilled professionals is dedicated to revitalising
            your property’s appearance with state-of-the-art equipment and
            eco-friendly cleaning solutions.
            <br />
            <br />
            With a deep understanding of Adelaide’s unique climate and
            environment, we ensure the highest quality results while protecting
            your property’s structural integrity. Trust in our no-hassle
            satisfaction guarantee and let Calibre Exterior Cleaning bring new
            life to your home or business. Request a quote today and uncover the
            unparalleled benefits of Adelaide’s leading pressure cleaning
            experts!
            <br />
            <br />
            <Span fontWeight={"700"}>
              bring new life to your home or business. Request a quote today and
              uncover the unparalleled benefits of Adelaide’s leading pressure
              cleaning experts!
            </Span>
          </Text>

          <VStack
            fontFamily={"poppins"}
            gap={"0px"}
            justify={"start"}
            align={"start"}
            w={"100%"}
           
          >
            <Text color="black" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span color="black" textStyle={"tinyText"} fontWeight={"normal"}>
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
            <Text color="black" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span color="black" textStyle={"tinyText"} fontWeight={"normal"}>
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
            <Text color="black" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span color="black" textStyle={"tinyText"} fontWeight={"normal"}>
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
            <Text color="black" fontSize="24px" fontWeight={"700"}>
              ✓{" "}
              <Span color="black" textStyle={"tinyText"} fontWeight={"normal"}>
                {" "}
                Pressure Cleaning
              </Span>
            </Text>
          </VStack>
          <Box
            w={"100%"}
            zIndex={"1"}
            p={{ base: "20px", md: "40px" }}
            pb={"350px"}
            rounded={"2xl"}
            bg={"gray.50"}
            border={"1px solid lightgray"}
            width={{ base: "100%", md: "100%" }}
            textAlign={{ base: "center", md: "left" }}
          ></Box>
        </VStack>
        <Box>
          <Box
          bg={"#02173A"}
            mt={"20px"}
            p={{ base: "20px", md: "40px" }}
          
            width={{ base: "100%", md: "40%" }}
            textAlign={{ base: "start", md: "start" }}
            position="relative"
            pb={"50px"}
            zIndex={"1"}
          >
            <VStack
              display="flex"
              h={"100%"}
              alignContent={"start"}
              justifyContent={"start"}
              textAlign={"start"}
              fontWeight={"700"}
              fontFamily={"poppins"}
              fontSize={"26px"}
            >
              <Text textAlign={"start"} color={"white"}>
               Tell Us About Your Job
              </Text>

              <Text
                textAlign={"center"}
                fontWeight={"500"}
                fontFamily={"poppins"}
                textStyle={"tinyText"}
                color={"white"}
              >
               Our team are local, friendly, and always grateful for the chance to work! You won’t be disappointed – don’t just take our word for it, check out some of our reviews below! 
              </Text>
              <Box
                mt={"20px"}
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="white"
                textColor={"white"}
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="white"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="white"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                as="input"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="white"
              />
              <Box
                fontWeight={"500"}
                w={"100%"}
                  as="textarea"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                borderBottom="1px solid #E2E8F0"
                flex="1"
                fontSize="14px"
                outline="none"
                py="10px"
                bg="transparent"
                color="white"
              />
              <Box display="flex" justifyContent="start" width="100%">
                <Box
                  mt={"5px"}
                  p={{ base: "20px", md: "40px" }}
                  rounded={"2xl"}
                  bg={"cyan.200"}
                  border={"1px solid cyan.500"}
                  width={{ base: "100%", md: "40%" }}
                  textAlign={{ base: "center", md: "left" }}
                  position="relative"
                  color="cyan.600"
                  borderRadius="30px"
                  py="10px"
                  px={{ base: "20px", md: "20px" }}
                  fontFamily="arial"
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  // onClick={() => setIsDialogOpen(true)}
                >
                  <Text>Send</Text>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PressureWashing;
