import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

import onePieceOFbackground from "@/public/ProjectAssets/onePieceOFbackground.svg";
import Image from "next/image";
import OpeningLandingPage from "@/components/personalPortfolio/openingLandingPage/OpeningLandingPage";
import UpWardScroll from "@/components/personalPortfolio/openingLandingPage/UpWardScroll";
import Hero from "@/components/personalPortfolio/openingLandingPage/Hero";
import Navbar from "@/components/globalComponents/Navbar";

const page = () => {
  return (
    <>
    
<Navbar/>
<HStack justify={"center"} align={"start"} w={"100%"} h={"100vh"}>

<Hero />
</HStack>
      {/* <UpWardScroll /> */}
    </>
  );
};

export default page;
