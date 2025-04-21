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
    <div className="flex items-start space-x-4">
      <div className="bg-gray-300 p-3 rounded-xl text-gray-900">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MissionSection: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-black" />,
      title: "Our Mission",
      description:
        "To empower businesses and individuals with innovative technology solutions that drive growth and success.",
    },
    {
      icon: <Eye className="h-6 w-6 text-black" />,
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
    <section className="py-10 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Driving Innovation with Purpose</h2>
              <div className="space-y-8">
                {values.map((value, index) => (
                  <Value key={index} icon={value.icon} title={value.title} description={value.description} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-mission.jpeg"
                  alt="Team working together"
                  width={1260}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white  p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-xl font-semibold mb-2 text-brand-primary">Our Promise</p>
                <p className="text-sm  text-gray-600">
                  We&apos;re committed to delivering exceptional value while maintaining the highest standards of
                  quality and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
