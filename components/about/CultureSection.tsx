"use client";

import React from "react";
import { Users, Heart, Lightbulb, Target, Globe, Shield } from "lucide-react";
import Image from "next/image";
// import Image from "next/image";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="bg-blue-100 p-3 rounded-full mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CultureSection: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "We believe the best ideas emerge when we work together across teams and disciplines.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusive",
      description: "We foster an environment where everyone feels welcome, valued, and heard.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative",
      description: "We challenge the status quo and continuously seek better ways to solve problems.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We set high standards and strive to exceed expectations in everything we do.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Impact-Driven",
      description: "Our work is guided by the positive difference we can make in the world.",
    },
    {
      icon: <Shield className="h-6 w-6 " />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethics in all our interactions.",
    },
  ];

  return (
    <section id="our-culture" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Culture & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve built a culture that encourages creativity, embraces diversity, and drives innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Life at Our Company</h3>
              <p className="text-blue-100 mb-6">
                Our dynamic work environment balances professional growth with personal well-being. We work hard
                together, celebrate our wins, and prioritize work-life harmony.
              </p>
              <p className="text-blue-100">
                From team-building events and community service to innovation days and continuous learning
                opportunities, we invest in creating a workplace where you can thrive.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <Image
                src="/about-banner.jpg"
                alt="Team members collaborating"
                width={1260}
                height={759}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
