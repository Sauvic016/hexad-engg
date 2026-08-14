"use client";
import React from "react";
// import { ChevronDown } from "lucide-react";
import Image from "next/image";
import expertiseHero from "@/public/expertise-banner.webp";

const ProductsBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={expertiseHero}
          fill
          alt="Modern office space with team collaboration"
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
            Engineered <span className="text-brand-primary">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)] max-w-3xl mx-auto">
            Cutting-edge solutions across critical industries that power our world for a better future
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
      </div>
    </section>
  );
};

export default ProductsBanner;
