"use client";

import React from "react";
import { ClipboardList, Users, MessageCircle, CheckCircle } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="relative">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
            {icon}
          </div>
          {number < 4 && (
            <div className="absolute top-14 left-1/2 w-px h-24 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
          )}
        </div>
      </div>
      <div className="pt-2 pb-8">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-xs font-bold mr-2">
            {number}
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ApplicationProcess: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Application Review",
      description:
        "Our recruitment team carefully reviews your application and résumé to evaluate your skills and experience against the position requirements.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Initial Interview",
      description:
        "Selected candidates participate in a preliminary interview with a recruiter to discuss your background, career goals, and interest in the position.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Interviews",
      description:
        "Meet with potential team members and leadership through a series of interviews that assess both technical skills and cultural fit.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Offer & Onboarding",
      description:
        "Successful candidates receive a competitive offer. Once accepted, our comprehensive onboarding program helps you integrate seamlessly into your new role.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Application Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4  rounded-full"></div>
            <p className="text-xl text-gray-600">
              We&apos;ve designed a straightforward process to help us find the right candidates while giving you
              insight into our company.
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:pl-8">
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} title={step.title} description={step.description} icon={step.icon} />
            ))}
          </div>

          {/* <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">What to Expect</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong className="text-gray-800">Timeline:</strong> Our typical hiring process takes 2-3 weeks from
                application to offer, though this may vary depending on the position.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Preparation:</strong> Research our company and products. Be ready to
                share specific examples from your experience that demonstrate your skills and achievements.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Questions:</strong> Prepare thoughtful questions about the role, team,
                and company. We value curiosity and engagement.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-800">Feedback:</strong> We aim to provide timely feedback after each stage
                of the interview process, regardless of the outcome.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
