import React from "react";
import ProductsBanner from "@/components/expertise/ExpertiseBanner";
import ExpertiseCard from "@/components/expertise/ExpertiseCard";
import {
  Cpu,
  Droplet,
  Gauge,
  Lightbulb,
  PanelTop,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Products: React.FC = () => {
  const productSections = [
    {
      id: "oil-gas",
      title: "Oil & Gas",
      description:
        "At Hexad, we understand the vital role the Oil and Gas industry plays in powering the world. Our specialized engineering services are designed to support every stage of the industry — from exploration and production to processing and distribution.",
      imageUrl: "/IMG_7986.JPG",
      icon: <Gauge size={24} />,
      isReversed: false,
    },
    {
      id: "water-treatment",
      title: "Water Treatment",
      description:
        "We provide innovative engineering solutions for the water treatment industry, ensuring efficient and sustainable water management. From water purification to wastewater treatment, our expertise helps clients meet regulatory standards while optimizing operational performance. We're dedicated to creating systems that protect water resources for a cleaner, more sustainable future.",
      imageUrl: "/IMG_7983.JPG",
      icon: <Droplet size={24} />,
      isReversed: true,
    },
    {
      id: "industrial-automation",
      title: "Industrial Automation",
      description:
        "We specialize in delivering cutting-edge industrial automation solutions that streamline processes and enhance operational efficiency. From control systems to robotics and process automation, we design and implement systems that optimize performance, reduce costs, and improve safety.",
      imageUrl: "/IMG_7985.JPG",
      icon: <Cpu size={24} />,
      isReversed: false,
    },
    {
      id: "utilities",
      title: "Utilities",
      description:
        "With a focus on innovation, we deliver tailored engineering solutions for the utilities sector, ensuring reliable and sustainable infrastructure for water, power, and energy systems.",
      imageUrl: "/IMG_7987.WEBP",
      icon: <ZapIcon size={24} />,
      isReversed: true,
    },
    {
      id: "power",
      title: "Power",
      description:
        "Delivering advanced engineering solutions for the power industry, enhancing the efficiency and reliability of power generation, transmission, and distribution systems.",
      imageUrl: "/IMG_8009.JPG",
      icon: <Lightbulb size={24} />,
      isReversed: false,
    },
    {
      id: "power-distribution",
      title: "Power Distribution Equipment",
      description: (
        <>
          At Hexad, we specialize in delivering high-quality, reliable power
          distribution equipment designed to ensure safe and efficient energy
          flow across your electrical network. From substations to end-use
          delivery points, our equipment supports the backbone of modern power
          systems with precision and performance.
          <p className="mt-4">Our offerings include:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Medium and Low Voltage Switchgear</strong>{" "}
              – Engineered for durability and safety in demanding environments.
            </li>
            <li>
              <strong>Distribution Transformers</strong>{" "}
              – High-efficiency transformers tailored to meet specific voltage
              requirements.
            </li>
            <li>
              <strong>Control Panels and Relay Systems</strong>{" "}
              – Intelligent controls for monitoring and managing electrical
              distribution.
            </li>
          </ol>
        </>
      ),
      imageUrl: "/IMG_7991.JPG",
      icon: <PanelTop size={24} className="p-3 rounded-xl text-gray-900" />,
      isReversed: true,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <ProductsBanner />

      <div id="products-section" className="container mx-auto px-4 mt-24 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Industry Solutions
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4  rounded-full"></div>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Engineering excellence across sectors that power modern infrastructure
          and industry
        </p>

        <div className="grid grid-cols-1 gap-12 md:gap-16 mx-auto max-w-6xl">
          {productSections.map((product) => (
            <ExpertiseCard
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              iconComponent={product.icon}
              isReversed={product.isReversed}
            />
          ))}
        </div>
      </div>

      <div className="bg-white text-brand-primary py-16 mx-5 lg:mx-20 shadow-lg  rounded-2xl my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Partner with Hexad for innovative engineering solutions tailored to
            your industry needs
          </p>
          <Link href={"/contact"}>
            <Button className="cursor-pointer px-8 py-3 bg-black text-white rounded-md text-md font-medium  transition-colors">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
