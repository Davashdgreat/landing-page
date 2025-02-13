"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    comment: "This service is amazing! It really helped me grow my business.",
    image: "/testifier1.png",
  },
  {
    name: "Jane Smith",
    comment: "Highly recommended! The team is professional and efficient.",
    image: "/testifier1.png",
  },
  {
    name: "David Johnson",
    comment: "Great experience. I will definitely use their services again!",
    image: "/testifier1.png",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 md:px-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">What Do Our Atendees Have To Say?</h2>
        <p className="mt-2 text-gray-600 pb-10">Well, See For Yourself!</p>
      </motion.div>

      <div className="flex justify-around gap-8">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="relative w-40 h-40 rounded-full border-4 border-[#8300FF] p-1 flex items-center justify-center"
        >
          <div className="w-30 h-30 rounded-full overflow-hidden flex items-center justify-center">
            <div className="relative w-28 h-28">
              <Image
                src="/testifier1.png" // Change to your actual image path
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

      <div className="grid grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="mt-2 text-center text-gray-700">{testimonial.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
