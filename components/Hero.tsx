"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import videoPoster from "@/public/video-background/Cover.jpg";

const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 ">
        <Image
          src={videoPoster}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${isVideoReady ? "opacity-0" : "opacity-100"}`}
        />
        <video
          src={`${process.env.NEXT_PUBLIC_HERO_VIDEO_URL}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        ></video>
      </div>

      <div className="container  relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
            Transform Industries
            <br />
            with
            <span className="text-brand-primary font-extrabold">HEXAD</span>
          </h1>

          <p className="text-lg font-semibold md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
            From product innovation to infrastructure development
            <br /> we bring vision to reality.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4" // transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/what-we-do" className="">
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
