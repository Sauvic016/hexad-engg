"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Handshake, ShieldCheck, Users, Zap } from "lucide-react";
import ServiceCard from "@/components/service-card";
import c1 from "@/public/c1.avif";
import c2 from "@/public/c2.avif";
import c3 from "@/public/c3.avif";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const productDesignServices = [
  {
    icon: (
      <Image src="/icons/MachineEquipmentDesignIcon.webp" alt="Industrial Automation icon" width={30} height={30} />
    ),
    image: c1,
    title: "Industrial Automation",
    description:
      "Smart automation solutions that improve efficiency, enhance control, and drive operational excellence.",
  },

  {
    icon: <Image src="/icons/PDEIcon.png" alt="PDE" width={30} height={30} />,
    image: c3,
    title: "Power Distribution Equipment",
    description: "Reliable and efficient power distribution systems designed for safety, performance, and scalability.",
  },
  {
    icon: <Image src="/icons/EmbeddedIcon.png" alt="embedded_icon" width={30} height={30} />,
    image: c2,
    title: "Embedded Products",
    description: "Custom embedded solutions engineered for performance, durability, and seamless integration.",
  },
];

const plantEngineeringServices = [
  {
    icon: <Image src="/icons/Piping_Icon.webp" alt="piping" width={20} height={20} />,
    title: "Piping",
    summary: "Efficient piping system design ensuring safety, reliability, and optimal performance.",
  },
  {
    icon: <Zap />,
    title: "Electrical",
    summary: "Power systems and electrical designs built for efficiency, safety, and compliance.",
  },
  {
    icon: <Image src="/icons/MechanicalIcon.png" alt="Civil_Structural" width={20} height={20} />,
    title: "Mechanical",
    summary: "Mechanical design solutions focused on performance, durability, and efficiency.",
  },
  {
    icon: <Image src="/icons/Instrumentation_icon.webp" alt="Instrumentation and Control" width={20} height={20} />,
    title: "Instrumentation & Control",
    summary: "Advanced instrumentation and control solutions for precision and reliability.",
  },
  {
    icon: <Image src="/icons/Civil_Structural.jpg" alt="Civil and Structural" width={20} height={20} />,
    title: "Civil & Structural",
    summary: "Robust civil and structural engineering for safe and sustainable infrastructure.",
  },
];

export function ProductDesignGrid() {
  return (
    <div id="product-design" className="scroll-mt-20 pt-5">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid w-full max-w-[320px] grid-cols-1 items-stretch gap-5 sm:max-w-[580px] sm:grid-cols-2 lg:max-w-[880px] lg:grid-cols-3 2xl:max-w-[1060px] 2xl:gap-8"
      >
        {productDesignServices.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function PlantEngineeringGrid() {
  const deliveryStrengths = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experienced Engineering Team",
      description: "Skilled professionals with domain expertise",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Quality & Compliance",
      description: "Adherence to global standards",
    },
    {
      icon: <Clock3 className="h-8 w-8" />,
      title: "On-Time Delivery",
      description: "Committed to your project timelines",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Client-Focused Approach",
      description: "Your goals drive our solutions",
    },
  ];

  return (
    <div id="plant-engineering" className="scroll-mt-20">
      <div className="mx-auto  max-w-7xl text-center">
        <div className="mx-auto my-4 h-1 w-24 bg-brand-primary" />
        <p className="mb-10 text-lg font-semibold uppercase text-brand-primary">Our Engineering Disciplines</p>
        <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
          Multi-Disciplinary Expertise.
          <br /> One Goal - Your Success.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          We bring together specialized engineering disciplines to deliver integrated, efficient, and cost-effective
          solutions for complex industrial challenges.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto my-10 grid w-full grid-cols-1 items-stretch gap-2 sm:max-w-[620px] sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-6 lg:gap-2 xl:max-w-7xl xl:gap-4 2xl:max-w-[1600px]"
      >
        {plantEngineeringServices.map((service) => (
          <motion.article
            key={service.title}
            whileHover={{ y: -4, boxShadow: "0 14px 32px -18px rgba(15, 23, 42, 0.28)" }}
            transition={{ duration: 0.2 }}
            className="flex min-h-60 w-full flex-col items-center rounded-lg border border-blue-100 bg-white py-5 text-center shadow-sm lg:col-span-2 lg:[&:nth-child(4)]:col-start-2 2xl:min-h-72 2xl:px-5 2xl:py-6"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-primary bg-blue-50 text-brand-primary">
              <div className="flex h-8 w-8 items-center justify-center [&_img]:h-8 [&_img]:w-8">{service.icon}</div>
            </div>
            <h3 className="mb-3 text-sm font-bold uppercase text-blue-900">{service.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 px-2">{service.summary}</p>
            <div className="mt-auto pt-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white"
                role="img"
                aria-label={`Read more about ${service.title}`}
                title={`Read more about ${service.title}`}
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8 grid overflow-hidden rounded-lg bg-blue-50 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {deliveryStrengths.map((strength, index) => (
          <div
            key={strength.title}
            className={`flex items-center gap-4 px-4 py-3 text-blue-950 ${
              index > 0 ? "lg:border-l lg:border-blue-200" : ""
            }`}
          >
            <div className="shrink-0 text-brand-primary">{strength.icon}</div>
            <div>
              <h3 className="text-sm font-semibold">{strength.title}</h3>
              <p className="mt-1 text-xs text-gray-600">{strength.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
