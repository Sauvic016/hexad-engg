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
    <article className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-brand-primary">
          {icon}
        </div>
        <span className="text-4xl font-bold text-blue-100">0{number}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold text-blue-950">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
    </article>
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
    <section className="bg-gradient-to-b from-white via-blue-50/40 to-white pb-20 pt-10 sm:pb-24 sm:pt-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <div className="mx-auto mb-5 h-1 w-24 bg-brand-primary" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">What to Expect</p>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-blue-950 md:text-5xl">Our Application Process</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 sm:text-lg">
              We&apos;ve designed a straightforward process to help us find the right candidates while giving you
              insight into our company.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
};

export default ApplicationProcess;
