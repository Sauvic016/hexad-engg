"use client";
import React from "react";
import { motion } from "framer-motion";
import { Settings, Cpu, Bot as Robot, Microchip, Building2, Zap, Wrench, Gauge, Pipette } from "lucide-react";
import ServiceCard from "@/components/service-card"; // Assuming this component is already built

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const services = [
  {
    section: "Product Design",
    icon: <Settings className="text-white h-6 w-6" />,
    color: "from-blue-500 to-blue-700",
    items: [
      {
        icon: <Settings className="text-blue-500" />,
        title: "Industrial Automation",
        description: "Advanced automation solutions to optimize your manufacturing processes and increase efficiency.",
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
    ],
  },
  {
    section: "Plant Engineering",
    icon: <Building2 className="text-white h-6 w-6" />,
    color: "from-blue-700 to-blue-900",
    items: [
      {
        icon: <Pipette className="text-blue-600" />,
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
    ],
  },
];

export default function ServicesGrid() {
  return (
    <div className=" px-4 md:px-8">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Capabilities</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our specialized services in Product Design and Plant Engineering, tailored to drive innovation and
          efficiency.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((section, sIdx) => (
          <React.Fragment key={sIdx}>
            {/* Section Heading - spans full width */}
            <div className="col-span-full flex items-center space-x-4 mt-10 mb-4">
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
              >
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">{section.section}</h2>
            </div>

            {section.items.map((service, idx) => (
              <motion.div key={idx} variants={item}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant={section.section === "Product Design" ? "product" : "plant"}
                />
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
