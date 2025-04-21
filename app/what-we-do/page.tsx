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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/70 z-10"></div>
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
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute top-40 -left-24 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute top-80 right-0 w-96 h-96 rounded-full bg-blue-50 opacity-40 blur-3xl" />

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
            {/* Page Heading */}
            {/* <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900">Our Capabilities</h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Discover our specialized services in Product Design and Plant Engineering, tailored to drive innovation
                and efficiency.
              </p>
            </div> */}

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
                <div className="flex justify-center items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                    <Settings className="text-white h-6 w-6" />
                  </div>
                  <h2 className="text-2xl text-center font-semibold text-gray-900">Product Design</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Settings className="text-blue-500" />,
                      title: "Industrial Automation",
                      description:
                        "Advanced automation solutions to optimize your manufacturing processes and increase efficiency.",
                    },
                    {
                      icon: <Settings className="text-blue-500" />,
                      title: "Machine & Equipment Design (SPM’s)",
                      description: "Tailored designs for custom machinery and special-purpose machines.",
                    },
                    {
                      icon: <Cpu className="text-blue-500" />,
                      title: "Control Systems",
                      description: "Custom control systems designed for precision, reliability, and ease of operation.",
                    },
                    {
                      icon: <Cpu className="text-blue-500" />,
                      title: "Assembly Lines",
                      description: "Streamlined assembly solutions to scale production with flexibility.",
                    },
                    {
                      icon: <Robot className="text-blue-500" />,
                      title: "Robotic Integration",
                      description: "Seamless integration of robotic systems into your production workflows.",
                    },
                    {
                      icon: <Cpu className="text-blue-500" />,
                      title: "Power Distribution Equipment",
                      description: "Efficient power solutions tailored for industrial environments.",
                    },
                    {
                      icon: <Microchip className="text-blue-500" />,
                      title: "Embedded Products",
                      description: "Specialized embedded systems for real-time control and monitoring.",
                    },
                  ].map((service, idx) => (
                    <motion.div key={idx} variants={item}>
                      <ServiceCard {...service} variant="product" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>


              <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
                    <Building2 className="text-white h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">Plant Engineering</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <PipeLine className="text-blue-600" />,
                      title: "Piping",
                      description: "Comprehensive piping design and implementation for industrial facilities.",
                    },
                    {
                      icon: <Zap className="text-blue-600" />,
                      title: "Electrical",
                      description: "Full-service electrical engineering from planning to installation and maintenance.",
                    },
                    {
                      icon: <Wrench className="text-blue-600" />,
                      title: "Mechanical",
                      description: "Mechanical engineering solutions designed for durability and performance.",
                    },
                    {
                      icon: <Gauge className="text-blue-600" />,
                      title: "Instrumentation",
                      description: "Precision instrumentation services for monitoring and control applications.",
                    },
                    {
                      icon: <Building2 className="text-blue-600" />,
                      title: "Civil & Structural",
                      description: "Expert civil and structural engineering for industrial infrastructure projects.",
                    },
                  ].map((service, idx) => (
                    <motion.div key={idx} variants={item}>
                      <ServiceCard {...service} variant="plant" />
                    </motion.div>
                  ))}
                </div>


                <motion.div variants={item}>
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
              </motion.div>
            </div> */}
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
