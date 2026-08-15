"use client";
import React from "react";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 border-t border-blue-100 py-6 first:border-t-0 first:pt-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-brand-primary">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-blue-950">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Our Mission",
      description:
        "To empower businesses and individuals with innovative technology solutions that drive growth and success.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Our Vision",
      description:
        "Our vision is to become a globally recognized leader in engineering excellence, driving innovation and sustainable progress that improves lives and shapes a better future.",
    },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Our Impact",
    //   description:
    //     "Making a positive difference in communities worldwide through technology and sustainable practices.",
    // },
  ];

  return (
    <section className="overflow-hidden bg-blue-50/40 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_20px_60px_-35px_rgba(7,21,47,0.35)] lg:grid-cols-2">
            <div className="relative min-h-[360px] bg-blue-950 lg:min-h-[580px]">
              <Image
                src="/about-mission.jpeg"
                alt="HEXAD team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-primary/12 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 border-l-2 border-brand-primary pl-4 text-white sm:bottom-8 sm:left-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Our Promise</p>
                <p className="mt-2 max-w-md text-lg font-semibold">Quality, innovation, and practical value in every engagement.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Our Direction</p>
              <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">Driving Innovation with Purpose</h2>
              <div className="mt-8">
                {values.map((value, index) => (
                  <Value key={index} icon={value.icon} title={value.title} description={value.description} />
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default MissionSection;
