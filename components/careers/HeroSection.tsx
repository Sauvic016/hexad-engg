"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Careers.jpeg"
          width={1920}
          height={1260}
          alt="Team collaborating at a modern office"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join the Mission to <span className="text-brand-primary">Transform</span> the Future
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          We&apos;re building something extraordinary, and we need exceptional people like you to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#open-positions"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center gap-2 group"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="/about#our-culture"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/20"
          >
            Discover Our Culture
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
