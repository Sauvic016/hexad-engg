import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    id: "service-types",
    question: "What types of engineering services do you offer?",
    answer:
      "We offer a comprehensive range of engineering services including mechanical engineering, electrical engineering, civil engineering, software development, web and app development, and specialized analysis services. Our multidisciplinary approach allows us to tackle complex projects across various industries.",
  },
  {
    id: "quality-assurance",
    question: "How do you ensure the quality of your services?",
    answer:
      "Quality is at the core of everything we do. We follow industry best practices, employ rigorous testing and validation procedures, and maintain strict quality control throughout the project lifecycle. Our team consists of highly qualified professionals who are experts in their respective fields.",
  },
  {
    id: "industries-served",
    question: "What industries do you serve?",
    answer:
      "We work with clients across a wide range of industries including manufacturing, automotive, aerospace, energy, healthcare, IT, and consumer products. Our diverse expertise allows us to understand the unique challenges and requirements of different sectors.",
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope, complexity, and specific requirements. During our initial consultation, we'll assess your needs and provide a detailed project plan with realistic timelines. We pride ourselves on meeting deadlines while maintaining the highest quality standards.",
  },
  {
    id: "customized-solutions",
    question: "Do you offer customized solutions?",
    answer:
      "Absolutely! We believe in tailoring our solutions to meet each client's unique needs. We work closely with you to understand your specific requirements and challenges, then develop customized solutions that address those needs effectively and efficiently.",
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

        <div className="max-w-4xl ">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm px-6"
              >
                <AccordionTrigger className="text-sm md:text-md xl:text-lg font-medium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-2 xl:pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
