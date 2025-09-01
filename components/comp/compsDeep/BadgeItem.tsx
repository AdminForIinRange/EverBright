import { VStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Google from "@/public/Google.png";

const BadgeItem = ({ label }: { label: string }) => (
  <VStack p={4} w="100px">
    <Box bg="red" p={4}>
      <Image src={Google} alt="Google" width={50} />
    </Box>
    <Text textAlign="center" fontSize="12px" fontWeight="500" fontFamily="poppins">
      {label}
    </Text>
  </VStack>
);

export default BadgeItem;
