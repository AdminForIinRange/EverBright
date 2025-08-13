import React from "react";
import "../globals.css";
import Navbar from "@/components/globalComponents/Navbar";
import { HStack, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import onePieceOFbackground from "@/public/ProjectAssets/onePieceOFbackground.svg";
import SideBar from "@/components/globalComponents/SideBar";
export const dynamic = "force-dynamic";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   

      <div className="">{children}</div>
    </>
  );
};

export default Layout;
