"use client";
import React from "react";
import Image from "next/image";
import aboutHero from "@/public/banner-about.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#07152f]">
      <div className="absolute inset-0">
        <Image
          src={aboutHero}
          alt="Modern office space with team collaboration"
          fill
          className="object-cover object-center brightness-[0.55] saturate-[0.85]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[#07152f]/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-brand-primary/15 mix-blend-color" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,21,47,0.18)_0%,rgba(7,21,47,0.78)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-5 h-1 w-24 bg-brand-primary" />
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">About HEXAD Engineering</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Engineering Ideas into <span className="text-brand-primary">Dependable Outcomes</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
          A multidisciplinary team bringing engineering, design, and technology together to solve complex industrial
          challenges.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
