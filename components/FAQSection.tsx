import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-brand-primary" />
          <h2 className="text-3xl font-bold uppercase tracking-tight text-blue-950 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 md:text-lg">
            Clear answers about our approach, capabilities, and what it is like to work with HEXAD.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <aside className="relative overflow-hidden rounded-2xl bg-[#07152f] shadow-[0_24px_65px_-35px_rgba(7,21,47,0.65)] lg:sticky lg:top-24">
            <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[540px]">
              <Image
                src="/question-mark.jpg"
                alt="Engineering team discussing project questions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-brand-primary/15 mix-blend-color" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07152f] via-[#07152f]/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-blue-300 backdrop-blur-sm">
                  <MessageCircleQuestion className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">Still have a question?</h3>
                <p className="mt-3 max-w-md leading-relaxed text-blue-100/75">
                  Tell us about your project and our team will help you identify the right next step.
                </p>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 border-b border-blue-400/60 pb-1.5 text-sm font-semibold text-blue-300 transition hover:border-white hover:text-white"
                >
                  Contact Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-xl border border-blue-100 bg-white px-5 shadow-sm transition data-[state=open]:border-brand-primary/40 data-[state=open]:shadow-[0_14px_35px_-24px_rgba(37,99,235,0.45)] sm:px-6"
              >
                <AccordionTrigger className="py-5 text-base font-semibold leading-snug text-blue-950 hover:no-underline sm:text-lg [&>svg]:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-8 leading-relaxed text-gray-600 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
