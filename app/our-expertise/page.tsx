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
  EvCharger,
  CarFront as Car,
  Gpu,
  ChartLine,
  BookAlert,
  SolarPanel,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Expertise - HEXAD Engineering",
  description: "Get to know about the industries we provide solutions",
};

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
          At Hexad, we specialize in delivering high-quality, reliable power distribution equipment designed to ensure
          safe and efficient energy flow across your electrical network. From substations to end-use delivery points,
          our equipment supports the backbone of modern power systems with precision and performance.
          <p className="mt-4">Our offerings include:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Medium and Low Voltage Switchgear</strong> – Engineered for durability and safety in demanding
              environments.
            </li>
            <li>
              <strong>Distribution Transformers</strong> – High-efficiency transformers tailored to meet specific
              voltage requirements.
            </li>
            <li>
              <strong>Control Panels and Relay Systems</strong> – Intelligent controls for monitoring and managing
              electrical distribution.
            </li>
          </ol>
        </>
      ),
      imageUrl: "/IMG_7991.JPG",
      icon: <PanelTop size={24} />,
      isReversed: true,
    },
    {
      id: "automotive-engineering",
      title: "Automotive Engineering",
      description: (
        <>
          <p className="my-4 ">Our Offerings include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm ">
            <li> CAD & CAE AUTOMATION</li>
            <li> INDUSTRIAL AUTOMATION</li>
            <li> INT/EXT PLASTIC TRIMS DESIGN</li>
            <li> CAE SOLUTIONS</li>
            <li> ROBOTIC SIMULATION</li>
            <li> BIW FIXTURE DESIGN</li>
          </ul>
        </>
      ),
      imageUrl: "/Automotive.png",
      icon: <Car size={24} />,
      isReversed: false,
    },
    {
      id: "electronic-engineering",
      title: "Electronic Engineering",
      description: (
        <>
          We provide end-to-end electronic engineering and design services - from concept and schematic design to PCB
          layout, embedded firmware, simulation, prototyping, and product lifecycle support across multiple industries.
          <p className="my-4">Our Offerings include:</p>
          <ol className="list-disc pl-5 mt-2 space-y-2 text-sm max-h-44 overflow-y-auto pr-2">
            <li>Concept Development & System Architecture</li>
            <li>Schematic Design</li>
            <li>PCB Design & Layout</li>
            <li>Embedded Systems Development</li>
            <li>Simulation & Analysis</li>
            <li>Prototyping & Testing Support</li>
            <li>Product Engineering & Lifecycle Support</li>
            <li>Industry Applications</li>
            <li>IoT SYSTEM DESIGN</li>
          </ol>
        </>
      ),
      imageUrl: "/Electronic_Engineering.WEBP",
      icon: <EvCharger size={24} />,
      isReversed: true,
    },
    {
      id: "mining-engineering",
      title: "Mining Engineering",
      description: (
        <>
          We provide comprehensive mining engineering and design services, including mine planning, infrastructure
          design, equipment optimization, CAD drafting, simulation, and project engineering support for open-pit and
          underground mining operations.
          <p className="my-4">Our Offerings include:</p>
          <ol className="list-disc pl-5 mt-2 space-y-2 text-sm max-h-48 overflow-y-auto pr-2">
            <li>Mine Planning & Design</li>
            <li>Geological & Resource Support</li>
            <li>Engineering Analysis & Design</li>
            <li>Equipment & Fleet Engineering</li>
            <li>CAD Drafting & Detailed Engineering</li>
            <li>Simulation & Technical Studies</li>
            <li>Documentation & Deliverables</li>
          </ol>
        </>
      ),
      imageUrl: "/Mining_Engineering.png",
      icon: <Gpu size={24} />,
      isReversed: false,
    },
    {
      id: "power_system_studies",
      title: "Power System Studies",
      description: (
        <>
          <p className="my-4 ">Our Offerings include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm ">
            <li>Load Flow Analysis (ETAP, SKM)</li>
            <li>Short Circuit Analysis (ETAP, SKM)</li>
            <li>Protective Device Coordination (ETAP, SKM)</li>
            <li>Arc Flash Studies (ETAP, SKM)</li>
            <li>Harmonic Analysis (ETAP, SKM)</li>
          </ul>
        </>
      ),
      imageUrl: "/Power_System_Studies.png",
      icon: <BookAlert size={24} />,
      isReversed: true,
    },
    {
      id: "analysis_and_simulation",
      title: "Analysis & Simulation",
      description:
        "We provide advanced engineering analysis and simulation services including FEA, CFD, thermal, structural, motion, and operational simulations to validate performance, reduce risk, and optimize product designs before manufacturing.",
      imageUrl: "/Analysis_Simulation.png",
      icon: <ChartLine size={24} />,
      isReversed: false,
    },
    {
      id: "solar-power-plant",
      title: "Solar Power Plant",
      description: (
        <>
          We provide comprehensive solar power plant engineering and design services, including feasibility studies,
          electrical and civil design, layout optimization, analysis, detailed engineering, and construction support for
          utility-scale and C&I solar projects.
          <p className="my-4">Our Offerings include:</p>
          <ol className="list-disc pl-5 mt-2 space-y-2 text-sm max-h-48 overflow-y-auto pr-2">
            <li>Feasibility Study &amp; Concept Design</li>
            <li>Solar PV Plant Layout &amp; Engineering</li>
            <li>Electrical Engineering</li>
            <li>Civil &amp; Structural Engineering</li>
            <li>Analysis &amp; Simulation</li>
            <li>Balance of Plant (BoP) Design</li>
            <li>Detailed Engineering &amp; Drafting</li>
          </ol>
        </>
      ),
      imageUrl: "/Solar_Power_Plant.png",
      icon: <SolarPanel size={24} />,
      isReversed: true,
    },
  ];

  return (
    <main className="w-full bg-white">
      <ProductsBanner />

      <section id="products-section" className="bg-gradient-to-b from-blue-50/40 to-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <div className="mx-auto mb-5 h-1 w-24 bg-brand-primary" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Sector Knowledge</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-blue-950 md:text-5xl">Our Industry Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 sm:text-lg">
              Engineering excellence across sectors that power modern infrastructure and industry.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:gap-10">
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
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#07152f] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <div className="mb-5 h-1 w-20 bg-brand-primary" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Operations?</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-blue-100/70">
                  Partner with HEXAD for engineering solutions tailored to your industry and operational goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Contact Our Experts
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
