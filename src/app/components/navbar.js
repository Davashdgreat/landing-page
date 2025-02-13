"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className=" flex max-w-7xl items-center justify-around p-3">

        <div>
          <Image
            src="/logo1.png"
            alt="Feature Image 1"
            width={200}
            height={80}      
            />
       </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="flex gap-[100px] text-[18px] text-medium">
        <ul className={`md:flex space-x-6 hidden `}>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Gallery</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact Us</a></li>
        </ul>
        
          <button className="md:flex hidden text-[#A649FF] border-2 border-[#A649FF] rounded-[20px] px-3 hover:text-white hover:bg-[#A649FF] transition-all">
            Register →
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="p-4 space-y-2">
              <li><a href="#" className="block text-gray-700 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="block text-gray-700 hover:text-blue-600">About</a></li>
              <li><a href="#" className="block text-gray-700 hover:text-blue-600">Services</a></li>
            </ul>
          </div>

        )}
      </div>
    </motion.nav>
  );
}
