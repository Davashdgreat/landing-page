"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="px-6 py-16 bg-white md:px-16">

      <div className="relative flex flex-col items-center justify-center py-16 text-black">
      <p className="text-center text-3xl py-4">
        Register and be part of our community
      </p>
      <p className="text-center text-lg p-5">
        Join our community of over <span className="font-bold">1000+</span> founders, developers, and tech junkies in general. <br />
        Be inspired by people who live to inspire!
      </p>

      <svg
        className="absolute top-[65%] left-1/2 transform -translate-x-1/2"
        width="80%"
        height="50px"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path d="M0,10 Q50,0 100,10" stroke="#B86DFF" strokeWidth="2" fill="transparent" />
      </svg>

      <div className="relative w-full flex justify-center mt-10 p-12">
        <div className="relative w-full max-w-4xl flex justify-between">
          {[
            { color: "border-purple-500", position: "top-[20px] left-[-20px]" },
            { color: "border-green-500", position: "top-[-70px] left-[136px]" },
            { color: "border-red-500", position: "top-[-20px] left-[300px]" },
            { color: "border-blue-500", position: "top-[-20px] left-[420px]" },
            { color: "border-orange-500", position: "top-[-20px] right-[270px]" },
            { color: "border-red-500", position: "top-[-70px] right-[100px]" },
            { color: "border-blue-500", position: "top-[20px] right-[-20px]" },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} w-20 h-20 rounded-full border-4 ${item.color} overflow-hidden`}
            >
              <Image
                src="/testifier1.png"
                alt="Profile"
                width={80}
                height={80}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="mt-20 px-6 py-3 text-lg font-semibold border-2 text-[#A649FF] border-[#A649FF] rounded-full hover:bg-[#A649FF] hover:text-white transition-all">
        Register Now →
      </button>
    </div>

      <div className="flex flex-col items-center gap-8 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/r2.jpeg"
            alt="Feature Image 2"
            width={350}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <p className="mt-4 text-gray-700 text-bold">
          At Founder’s Friday, Every Friday Is a Learning Experience!
          </p>
          <p className="mt-2 text-gray-700 text-bold">
          Join us in our mission to transform ideas into impact and shape the future of Abuja&apos;s startup landscape.
          </p>
          <button className="mt-6 rounded-3xl px-10 py-1 bg-[#A649FF] text-white border-2 hover:bg-white hover:text-[#A649FF] hover:border-[#a649ff] transition-all">
          Register →
        </button>
        </motion.div>
      </div>
    </section>
  );
}
