"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-8 bg-white px-6 py-16 md:flex-row md:px-16">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <Image
          src="/S1.jpeg"
          alt="Who We Are"
          width={600}
          height={500}
          className="rounded-xl"
        />
      </motion.div>

      {/* Right - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        <p className="mt-4 text-gray-700">
        Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.


        </p>
        <p className="mt-2 text-gray-700">
        Join us at the next Founder&apos;s Friday and be part of Abuja&apos;s most dynamic startup community. Together, we&apos;re not just sharing ideas—we&apos;re shaping the future of tech in our city.
        </p>

        <div className="flex gap-11 ">
        <button className="mt-6 rounded-3xl px-10 py-1 bg-[#A649FF] text-white border-2 hover:bg-white hover:text-[#A649FF] hover:border-[#a649ff] transition-all">
          Register →
        </button>
        <button className="mt-6 rounded-3xl px-10 py-3 text-[#A649FF] hover:bg-[#A649FF] hover:text-white border-2 border-[#A649FF] transition-all">
          Donate 💰
        </button>
        </div>
      </motion.div>
    </section>
  );
}
