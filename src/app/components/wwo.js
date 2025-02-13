"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export default function WhatWeOffer() {
  const services = [
    { title: "Monthly Meetups", description: "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities." },
    { title: "Diverse Network", description: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts." },
    { title: "Knowledge Sharing", description: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts." },
    { title: "Collaboration Opportunities", description: "Find potential co-founders, mentors, or partners for your next big venture." },
    { title: "Community Support", description: "Find potential co-founders, mentors, or partners for your next big venture." },
  ];

  return (
    <section className="px-6 py-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
      </motion.div>

      <div className="mt-8  mx-auto ">
        {services.map((service, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-4 bg-white border-b-2 p-3 "
              >
                <DisclosureButton className="flex w-full justify-between p-4 text-lg font-semibold text-gray-900 focus:outline-none">
                  {service.title}
                  <span className="text-[33px] text-[#75687E]">{open ? "+" : "+"}</span>
                </DisclosureButton>
                <DisclosurePanel className="p-4 text-gray-700 border-t border-gray-200">
                  {service.description}
                </DisclosurePanel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
