import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    id: "service-types",
    question: "What are the key benefits of working with Hexad Engineering?",
    answer:
      "Hexad delivers high-quality, North America-focused engineering solutions with speed, precision, and deep industry insight—powered by a team that truly understands your market.",
  },
  {
    id: "quality-assurance",
    question: "Why is Hexad Engineering the right partner for your engineering needs?",
    answer:
      " We’re founded by engineers who’ve walked in your shoes—our experience, agility, and client-first mindset make us a seamless extension of your team.",
  },
  {
    id: "industries-served",
    question: "What sets Hexad Engineering apart from other engineering service providers?",
    answer:
      "Unlike generic firms, Hexad is laser-focused on the North American market with a niche, senior-led team that blends innovation with practical design thinking.",
  },
  {
    id: "project-timeline",
    question: "Why do clients trust Hexad Engineering for their projects?",
    answer:
      "Our roots in the industry, transparent communication, and proven track record give clients confidence that we’ll deliver—every time.",
  },
  {
    id: "customized-solutions",
    question: "How does Hexad Engineering add value to your projects?",
    answer:
      "We move fast, think ahead, and tailor every solution to your exact goals—turning complex challenges into elegant, efficient designs.",
  },
  {
    id: "getting-started",
    question: "How do we get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our website, email, or phone to schedule an initial consultation. During this meeting, we'll discuss your project requirements, objectives, and timeline. Based on this conversation, we'll provide a proposal outlining our approach, deliverables, and cost estimates.",
  },
];

const FAQSection = () => {
  return (
    <section className="mt-24 bg-white md:mx-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto my-8">
          Find answers to common questions about our services and processes
        </p>
      </div>
      <div className="flex  mt-12 mx-10 justify-around">
        <div className="hidden md:flex text-center mb-16">
          <div>
            <Image
              src="/question-mark.jpg"
              width={600}
              height={300}
              alt="Custom software development"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl w-full md:w-1/2 ">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm px-6"
              >
                <AccordionTrigger className="text-sm md:text-md xl:text-lg font-medium ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
