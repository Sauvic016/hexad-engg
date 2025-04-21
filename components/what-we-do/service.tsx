"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package, Building2, Zap } from "lucide-react";
import ServiceCard from "@/components/service-card"; // Assuming this component is already built
import Image from "next/image";

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
    section_id: "product-design",
    icon: <Package className="text-white h-6 w-6" />,
    color: "from-gray-500 to-gray-700",
    items: [
      {
        icon: (
          <Image src="/icons/IndustrialAutomationIcon.webp" alt="Industrial Automation icon" width={20} height={20} />
        ),
        title: "Industrial Automation",
        description: "Advanced automation solutions to optimize your manufacturing processes and increase efficiency.",
      },
      {
        icon: (
          <Image
            src="/icons/MachineEquipmentDesignIcon.webp"
            alt="Machine Equipment Design Icon"
            width={20}
            height={20}
          />
        ),
        title: "Machine & Equipment Design (SPM’s)",
        description: "Tailored designs for custom machinery and special-purpose machines.",
      },
      {
        icon: <Image src="/icons/ControlSystemsIcon.png" alt="Control Systems Icon" width={20} height={20} />,
        title: "Control Systems",
        description: "Custom control systems designed for precision, reliability, and ease of operation.",
      },
      {
        icon: <Image src="/icons/AssemblyLinesIcon.webp" alt="Assembly lines icon" width={20} height={20} />,
        title: "Assembly Lines",
        description: "Streamlined assembly solutions to scale production with flexibility.",
      },
      {
        icon: <Image src="/icons/RoboticIcon.png" alt="Robotic icon" width={20} height={20} />,
        title: "Robotic Integration",
        description: "Seamless integration of robotic systems into your production workflows.",
      },
      {
        icon: <Image src="/icons/PDEIcon.png" alt="PDE" width={20} height={20} />,
        title: "Power Distribution Equipment",
        description: "Efficient power solutions tailored for industrial environments.",
      },
      {
        icon: <Image src="/icons/EmbeddedIcon.png" alt="embedded_icon" width={20} height={20} />,
        title: "Embedded Products",
        description: "Specialized embedded systems for real-time control and monitoring.",
      },
    ],
  },
  {
    section: "Plant Engineering",
    section_id: "plant-engineering",
    icon: <Building2 className="text-white h-6 w-6" />,
    color: "from-gray-700 to-gray-900",
    items: [
      {
        icon: <Image src="/icons/Piping_Icon.webp" alt="Civil_Structural" width={20} height={20} />,
        title: "Piping",
        description: "Comprehensive piping design and implementation for industrial facilities.",
      },
      {
        icon: <Zap className="" />,
        title: "Electrical",
        description: "Full-service electrical engineering from planning to installation and maintenance.",
      },
      {
        icon: <Image src="/icons/MechanicalIcon.png" alt="Civil_Structural" width={20} height={20} />,
        title: "Mechanical",
        description: "Mechanical engineering solutions designed for durability and performance.",
      },
      {
        icon: <Image src="/icons/Instrumentation_icon.webp" alt="Instrumentation" width={20} height={20} />,
        title: "Instrumentation",
        description: "Precision instrumentation services for monitoring and control applications.",
      },
      {
        icon: <Image src="/icons/Civil_Structural.jpg" alt="Civil_Structural" width={20} height={20} />,
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
        <div className="w-24 h-1 bg-blue-600 my-4 mx-auto rounded-full"></div>
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
            <div id={section.section_id} className="col-span-full flex items-center space-x-4 mt-10 mb-4 scroll-mt-20">
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
              >
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-brand-primary">{section.section}</h2>
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
      </motion.div>{" "}
    </div>
  );
}
