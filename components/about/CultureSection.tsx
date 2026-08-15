"use client";

import React from "react";
import { BadgeCheck, Globe2, Handshake, Lightbulb, ShieldCheck, UsersRound } from "lucide-react";
import Image from "next/image";
import culture from "@/public/about-banner.webp";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.055] p-6 transition-colors hover:border-brand-primary/50 hover:bg-white/[0.08] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/70 to-transparent" />
      <div className="flex items-center gap-4">
        <div className="shrink-0 text-blue-400 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[1.6]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-blue-100/65">{description}</p>
    </article>
  );
};

const CultureSection: React.FC = () => {
  const values = [
    {
      icon: <Handshake />,
      title: "Collaborative",
      description: "We believe the best ideas emerge when we work together across teams and disciplines.",
    },
    {
      icon: <UsersRound />,
      title: "Inclusive",
      description: "We foster an environment where everyone feels welcome, valued, and heard.",
    },
    {
      icon: <Lightbulb />,
      title: "Innovative",
      description: "We challenge the status quo and continuously seek better ways to solve problems.",
    },
    {
      icon: <BadgeCheck />,
      title: "Excellence",
      description: "We set high standards and strive to exceed expectations in everything we do.",
    },
    {
      icon: <Globe2 />,
      title: "Impact-Driven",
      description: "Our work is guided by the positive difference we can make in the world.",
    },
    {
      icon: <ShieldCheck />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethics in all our interactions.",
    },
  ];

  return (
    <section id="our-culture" className="bg-[#07152f] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="mx-auto mb-5 h-1 w-24 bg-brand-primary" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">How We Work</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">Our Culture &amp; Values</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100/70 sm:text-lg">
            We&apos;ve built a culture that encourages creativity, embraces diversity, and drives innovation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">Life at HEXAD</p>
              <h3 className="mt-3 text-2xl font-bold text-blue-950 sm:text-3xl">A workplace designed for meaningful growth.</h3>
              <p className="mt-5 leading-relaxed text-gray-600">
                Our dynamic work environment balances professional growth with personal well-being. We work hard
                together, celebrate our wins, and prioritize work-life harmony.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                From team-building events and community service to innovation days and continuous learning
                opportunities, we invest in creating a workplace where you can thrive.
              </p>
            </div>
            <div className="relative min-h-[300px] bg-blue-950 lg:min-h-[430px]">
              <Image
                src={culture}
                alt="Team members collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
