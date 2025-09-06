"use client";

import { VStack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface BadgeItemProps {
  text: string;
  image: string | StaticImageData; // ← singular 'image'
}

const BadgeItem = ({ text, image }: BadgeItemProps) => (
  <VStack
    p={4}
    w="100%"
    justify="start"
    align="center"
    h="100%"
    bg={["none", "none", "white", "white", "white", "white"]}
    borderRadius={["0px", "0px", "20px", "20px", "20px", "20px"]}
  >
    <Image src={image} alt={text} width={48} height={48} />  {/* width/height added */}
    <Text
      textShadow="0px 0px 100px white"
      textAlign="center"
      fontSize={["10px", "14px", "16px", "16px", "16px", "16px"]}
      fontWeight="500"
      fontFamily="poppins"
      color="white"
    >
      {text}
    </Text>
  </VStack>
);

export default BadgeItem;
