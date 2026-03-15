"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    // <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
    //   <div className="absolute inset-0 z-0">
    //     <Image
    //       src="/Careers.jpeg"
    //       width={1920}
    //       height={1260}
    //       alt="Team collaborating at a modern office"
    //       className="w-full h-full object-cover "
    //     />
    //   </div>

    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    //     <h1 className="text-4xl  md:text-6xl font-bold text-white mb-6">
    //       Join the Mission to{" "}
    //       <span className="text-brand-primary">Transform</span> the Future
    //     </h1>
    //     <p className="text-xl  text-center md:text-2xl text-white mb-2 md:mb-8 max-w-3xl mx-auto">
    //       We&apos;re building something extraordinary, and we need exceptional
    //       people like you to make it happen.
    //     </p>
    //     <div className="flex flex-row justify-center md:gap-4 gap-2 p-2">
    //       <Link
    //         href="#open-positions"
    //         className="p-2 text-sm md:px-8 md:py-4 bg-blue-600 text-white rounded-lg  md:font-medium md:text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center gap-2 group"
    //       >
    //         View Open Positions
    //         <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    //       </Link>
    //       <a
    //         href="/about#our-culture"
    //         className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/20"
    //       >
    //         Discover Our Culture
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Careers.jpeg"
          alt="HEXAD Engineering"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <div className="container relative z-20 mx-auto px-4  h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl flex flex-col items-center ">
          <h1 className=" text-center @max-xs:text-3xl text-4xl  md:text-6xl font-bold text-white mb-6 [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
            Join the Mission to{" "}
            <span className="text-brand-primary">Transform</span> the Future
          </h1>
          {/* <div className="w-40 h-1  bg-brand-primary mb-6"></div> */}
          <p className="text-sm text-center md:text-xl text-white/90 max-w-2xl [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
            We&apos;re building something extraordinary, and we need exceptional
            people like you to make it happen.
          </p>
        </div>
        <div className="flex flex-row justify-center md:gap-4 gap-2 p-2">
          <Link
            href="#open-positions"
            className=" p-2 text-center text-xs sm:px-8 sm:py-4 bg-blue-600 text-white rounded-lg  md:font-medium sm:text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center gap-2 group"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about#our-culture"
            className="p-2 text-xs text-center sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium sm:text-lg transition-all duration-300 hover:bg-white/20"
          >
            Discover Our Culture
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
