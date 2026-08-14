import Image from "next/image";
import ServicesGrid from "@/components/what-we-do/service";
import CustomService from "@/components/what-we-do/custom-service";
import whatWeDoHero from "@/public/about-banner.webp";

export const metadata = {
  title: "What we do - HEXAD Engineering",
  description: "Learn about our designs and solutions",
};

export default function WhatWeDoPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src={whatWeDoHero}
            alt="HEXAD Engineering"
            fill
            className="object-cover brightness-[0.7]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="max-w-4xl flex flex-col items-center ">
            <h1 className="text-4xl  md:text-6xl font-bold text-white mb-6 [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
              What <span className="text-brand-primary"> We</span> Do
            </h1>
            {/* <div className="w-40 h-1  bg-brand-primary mb-6"></div> */}
            <p className="text-lg text-center md:text-xl text-white/90 max-w-2xl [text-shadow:0_1px_3px_rgba(0,0,0,0.6),0_0_12px_rgba(0,0,0,0.3)]">
              Innovative engineering solutions for complex industrial challenges
            </p>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        {/* Background elements */}

        <div className="container mx-auto px-4 py-16  relative z-10">
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive engineering solutions tailored to your industry needs, combining innovative
              design with practical implementation.
            </p>
          </motion.div> */}
          <div className="mt-16 px-4 md:px-8">
            <ServicesGrid />
            <CustomService />
          </div>
        </div>
      </div>
    </>
  );
}
