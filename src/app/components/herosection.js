"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">
        
          <span className="ml-2 text-gray-900">
            <Typewriter
              words={["Explore Great Opportunities", "Meet new People", "Share and build diverse knowledge"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg">Join us in our mission to transform ideas into impact and shape the future of Nigeria&apos;s startup landscape.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 rounded-xl bg-white px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-200"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
