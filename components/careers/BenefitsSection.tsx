"use client";

import React from "react";
import { Heart, Plane, BookOpen, Coffee, Home, Clock, Award, DollarSign } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 rounded-lg">
      <div className="bg-gray-200 text-gray-600 p-3 rounded-xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-brand-primary mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, and vision insurance for you and your dependents.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Competitive Compensation",
      description: "Salary packages designed to attract and retain top talent in the industry.",
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Generous PTO",
      description: "Flexible vacation policy to ensure you can recharge and maintain work-life balance.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Learning & Development",
      description: "Annual budget for courses, conferences, and resources to support your growth.",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Office Perks",
      description: "Free meals, snacks, and beverages to keep you fueled throughout the day.",
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Flexible Work Environment",
      description: "Options for remote work and flexible schedules to suit your lifestyle.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Paid Parental Leave",
      description: "Extensive parental leave for new parents to bond with their children.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Recognition Programs",
      description: "Regular recognition and rewards for outstanding contributions and achievements.",
    },
  ];

  return (
    <section id="benefits_n_perks" className="mt-24 bg-white relative overflow-hidden ">
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Benefits & Perks</h2>
          <div className="w-24 h-1 bg-blue-600 mb-4 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in our team&apos;s well-being and success both in and outside of work.
          </p>
        </div>

        <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Benefit key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
