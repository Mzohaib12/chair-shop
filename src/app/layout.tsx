import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Top from "./Top/page";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main relative" style={{width:"100%", }}>

        <Top/>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
