"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 z-0 ">
        <video
          src={`${process.env.NEXT_PUBLIC_HERO_VIDEO_URL}`}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
      </div>

      <div className="container  relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 ">
            Transform Industries
            <br />
            with
            <span className="text-brand-primary font-extrabold"> HEXAD</span>
          </h1>

          <p className="text-lg font-semibold md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white">
            From product innovation to infrastructure development
            <br /> we bring vision to reality.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            // transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/what-we-do" className="hidden sm:block">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary text-white cursor-pointer">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-logo text-brand-primary hover:bg-white  hover:text-brand-primary cursor-pointer"
              >
                Talk to us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
