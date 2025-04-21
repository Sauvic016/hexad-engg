"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-blue-600">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`mt-2 pr-12 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the interview process like?",
      answer:
        "Our interview process typically includes an initial application review, a phone screen with a recruiter, one or more technical or role-specific interviews, and a final interview with the hiring manager or team. The exact process varies by role and department.",
    },
    {
      question: "Do you offer relocation assistance?",
      answer:
        "Yes, for certain roles we offer relocation assistance. This is determined on a case-by-case basis and will be discussed during the interview process if applicable to your situation.",
    },
    {
      question: "What's your remote work policy?",
      answer:
        "We embrace a flexible approach to work. Depending on the role, we offer fully remote positions, hybrid arrangements, or in-office roles. Each job posting indicates the work arrangement for that specific position.",
    },
    {
      question: "How long does the hiring process usually take?",
      answer:
        "Our hiring process typically takes 2-3 weeks from application to offer, though this timeline can vary depending on the position, number of applicants, and scheduling constraints.",
    },
    {
      question: "What career development opportunities do you offer?",
      answer:
        "We're committed to helping our employees grow professionally. We offer mentorship programs, learning stipends, regular performance reviews with career planning, internal mobility opportunities, and leadership development programs.",
    },
    {
      question: "What makes your company culture unique?",
      answer:
        "Our culture is built on innovation, inclusion, and impact. We value diverse perspectives, foster a collaborative environment, celebrate achievements, maintain work-life balance, and are united by our mission to make a positive difference in the world.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about working with us.</p>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:careers@example.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700"
            >
              Contact Our Recruiting Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
