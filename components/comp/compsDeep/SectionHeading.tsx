import { VStack, Text, Box } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  color?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  color = "white",
}: SectionHeadingProps) => (
  <VStack justify="left" align="left" textAlign="left" w="100%">
    <Text
      fontSize={["16px", "18px", "24px"]}
      fontFamily="poppins"
      fontWeight={700}
      lineHeight="1.6"
      color="blue.400"
    >
      {eyebrow}
    </Text>
    <Text
      fontSize={["40px", "48px", "56px"]}
      fontWeight={700}
      fontFamily="poppins"
      lineHeight="1.1"
      color={color}
    >
      {title}
    </Text>
    <Box my="25px" w={["100%", "600px"]} borderWidth="1px" />
  </VStack>
);

export default SectionHeading;
