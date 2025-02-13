"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of digital solutions including web development, design, and business automation.",
  },
  {
    question: "How can I register?",
    answer: "Click on the 'Register Now' button in the Features section and follow the instructions.",
  },
  {
    question: "Is customer support available?",
    answer: "Yes, we offer 24/7 customer support through email and live chat.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-white md:px-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-2 text-gray-600">Find answers to common questions</p>
      </motion.div>

      {/* FAQ List */}
      <div className="mt-8 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border-b border-gray-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full justify-between items-center py-4 text-left text-lg font-medium text-gray-900"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="pb-4 text-gray-700"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
