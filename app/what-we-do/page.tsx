import Image from "next/image";
import { PlantEngineeringGrid, ProductDesignGrid } from "@/components/what-we-do/service";
import CustomService from "@/components/what-we-do/custom-service";
// import whatWeDoHero from "@/public/about-banner.webp";
import whatWeDob1 from "@/public/what-we-do-b1.avif";
import whatWeDob2 from "@/public/what-we-do-b2.avif";

export const metadata = {
  title: "What we do - HEXAD Engineering",
  description: "Learn about our designs and solutions",
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* Banner Section */}

      <section className="relative overflow-hidden bg-[#07152f] pt-10 pb-14">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={whatWeDob1}
            alt="HEXAD industrial engineering services"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.58] saturate-[0.85]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#07152f]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-primary/15 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/90 via-[#07152f]/35 to-[#07152f]/55" />
        </div>

        <div className="absolute inset-y-0 left-0 hidden w-[46%] md:block [-webkit-mask-image:linear-gradient(to_right,#000_0%,#000_68%,transparent_100%)] [mask-image:linear-gradient(to_right,#000_0%,#000_68%,transparent_100%)]">
          <Image
            src={whatWeDob2}
            alt="HEXAD engineering design services"
            fill
            fetchPriority="high"
            className="object-cover object-center brightness-[0.45]"
            sizes="46vw"
          />
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-[#07152f] md:block [-webkit-mask-image:linear-gradient(to_left,#000_0%,#000_68%,transparent_100%)] [mask-image:linear-gradient(to_left,#000_0%,#000_68%,transparent_100%)]">
          <Image
            src={whatWeDob1}
            alt="HEXAD industrial engineering services"
            className="h-auto w-full object-cover object-top brightness-[0.45] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_100%)]"
            sizes="46vw"
          />
        </div>

        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_0%,transparent_28%,rgba(10,34,76,0.28)_36%,rgba(7,21,47,0.9)_46%,rgb(7,21,47)_50%,rgba(7,21,47,0.9)_54%,rgba(10,34,76,0.28)_64%,transparent_72%,transparent_100%)] md:block" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="mx-auto my-4 h-1 w-24 bg-brand-primary" />
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Our Capabilities</p>

            <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              End-to-End Engineering Solutions That Drive Your Projects Forward
            </h1>
            <p className="mx-auto max-w-2xl text-white/80 p-2 text-sm ">
              From concept to commissioning, we deliver innovative engineering solutions that enhance performance ,
              ensure reliability, and create long-term value.
            </p>
          </div>

          <ProductDesignGrid />
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="mx-auto w-full max-w-7xl px-4 pb-20  lg:px-8">
          <PlantEngineeringGrid />
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <CustomService />
        </div>
      </section>
    </>
  );
}
