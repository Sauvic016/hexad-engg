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
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-blue-900/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join Our Mission to <span className="text-blue-400">Transform</span> the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
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

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#benefits_n_perks" className="text-white opacity-80 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
