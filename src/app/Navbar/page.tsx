"use client"


import "remixicon/fonts/remixicon.css";
import { useState } from "react"; // Corrected import
import Link from "next/link";

export default function Navbar() {
  const [istrans, settrans] = useState(-100); // Store only the value

  return (
    <>
      <div
        style={{ height: "74px", padding: "14px 0px" }}
        className="navbar flex justify-between items-center"
      >
        {/* Hamburger Menu Icon */}
        <i
          className="ri-menu-line block md:hidden text-2xl ml-3"
          onClick={() => settrans(0)} // Corrected onClick
        ></i>

        {/* Sidebar Menu */}
        <div
          className="menu absolute flex-col bg-white w-32 pl-8  z-50 transition-transform"
          style={{ transform: `translateX(${istrans}%)` }} // Fixed syntax
        >
          <i
            className="ri-close-circle-line absolute cursor-pointer text-xl"
            style={{ right: "5px", top: "0px" }}
            onClick={() => settrans(-100)} // Close menu
          ></i>
          <ul>
            <Link href="/">
            <li
              className="list-none pb-[8px]"
              style={{ fontSize: "14px", fontWeight: "500", color: "#007580" }}
            >
              Home
            </li>
            </Link>



            <Link href="/AllProducts">
            <li className="list-none pb-[8px]" style={{ fontSize: "14px", fontWeight: "500" }}>
              Products
            </li>
            </Link>

            
           <Link href="/Faq">
           <li className="list-none pb-[8px]" style={{ fontSize: "14px", fontWeight: "500" }}>
              FAQ
            </li>
           </Link>


            <Link href="/Contact">
            <li className="list-none pb-[8px]" style={{ fontSize: "14px", fontWeight: "500" }}>
              Contact Us
            </li>
            </Link>


            <Link href="/About">
            <li className="list-none pb-[8px]" style={{ fontSize: "14px", fontWeight: "500" }}>
              About
            </li>
            </Link>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div
          className="lists hidden sm:none md:flex items-center"
          style={{ gap: "32px" }}
        >
          <Link href="/">
          <li
            className="list-none"
            style={{ fontSize: "14px", fontWeight: "500", color: "#007580" }}
          >
            Home
          </li>
          </Link>

          <Link href="/AllProducts">
          <li className="list-none " style={{ fontSize: "14px", fontWeight: "500"}}>
            Products
          </li>
          </Link>
          
          <Link href="/Faq">
          <li className="list-none" style={{ fontSize: "14px", fontWeight: "500" }}>
            FAQ
          </li>
          </Link>
          <Link href="/Contact">
          <li className="list-none" style={{ fontSize: "14px", fontWeight: "500" }}>
            Contact Us
          </li>
          </Link>
          <Link href="/About">
          <li className="list-none" style={{ fontSize: "14px", fontWeight: "500" }}>
            About
          </li>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="contact hidden md:block">
          <p style={{ fontSize: "14px", fontWeight: "200" }}>
            Contact:{" "}
            <span style={{ fontSize: "14px", fontWeight: "500" }}>0300-1130040</span>
          </p>
        </div>
      </div>
    </>
  );
}
