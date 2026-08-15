"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import careersHero from "@/public/Careers.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#07152f]">
      <div className="absolute inset-0 md:left-[42%]">
        <Image
          src={careersHero}
          alt="HEXAD Engineering team collaborating"
          fill
          className="object-cover object-center brightness-[0.62] saturate-[0.85]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[#07152f]/65 md:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#07152f_0%,#07152f_38%,rgba(7,21,47,0.92)_48%,rgba(7,21,47,0.38)_68%,rgba(7,21,47,0.08)_100%)] md:block" />
      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color" />

      <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center md:text-left">
          <div className="mx-auto mb-5 h-1 w-20 bg-brand-primary md:mx-0" />
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Build Your Career at HEXAD</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineer What&apos;s Next.
            <span className="block text-blue-300">Grow With HEXAD.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg md:mx-0">
            Join a multidisciplinary team solving practical engineering challenges across products, plants, and
            industrial systems.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Link
              href="#open-positions"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              View Open Positions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/about#our-culture"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discover Our Culture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
