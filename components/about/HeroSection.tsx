"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-about.jpeg"
          width={1920}
          height={1080}
          alt="Modern office space with team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-blue-900/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transforming Ideas into <span className="text-blue-400">Reality</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          We&apos;re a team of innovators, dreamers, and doers committed to building technology that shapes the future.
        </p>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#who-we-are"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center gap-2 group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/careers"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/20"
          >
            Join Our Team
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
