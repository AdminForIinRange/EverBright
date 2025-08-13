import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio",
};

const ClientProvider = dynamic(
  () => import("../components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth"}}
      suppressHydrationWarning
    >
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
