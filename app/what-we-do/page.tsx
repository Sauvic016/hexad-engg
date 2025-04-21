"use client";
// import ServiceCard from "@/components/service-card";

// import {
//   Settings,
//   BotIcon as Robot,
//   Cpu,
//   MicroscopeIcon as Microchip,
//   PenLineIcon as PipeLine,
//   Zap,
//   Wrench,
//   Gauge,
//   Building2,
// } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ServicesGrid from "@/components/what-we-do/service";

export default function WhatWeDoPage() {
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0 },
  // };

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-banner.jpg"
            alt="HEXAD Engineering"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="max-w-4xl flex flex-col items-center ">
            <h1 className="text-4xl  md:text-6xl font-bold text-white mb-6">
              What
              <span className="text-brand-primary"> We</span> Do
            </h1>
            {/* <div className="w-40 h-1  bg-brand-primary mb-6"></div> */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Innovative engineering solutions for complex industrial challenges
            </p>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        {/* Background elements */}

        <div className="container mx-auto px-4 py-16  relative z-10">
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive engineering solutions tailored to your industry needs, combining innovative
              design with practical implementation.
            </p>
          </motion.div> */}
          <div className="mt-16 px-4 md:px-8">
            <ServicesGrid />
            <motion.div className="flex  justify-center ">
              <div className="p-6 mt-6 border border-blue-100 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Looking for a Custom Solution?</h3>
                <p className="text-blue-800 mb-4">
                  We specialize in tailoring plant engineering systems to meet your unique industry needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition"
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
