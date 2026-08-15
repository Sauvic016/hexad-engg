"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SlickSlider() {
  const items = [
    {
      id: 1,
      image: "/IMG_7983.JPG",
      title: "Water Treatment",
      link: "/our-expertise#water-treatment",
    },

    {
      id: 2,
      image: "/IMG_7985.JPG",

      title: "Industrial Automation",
      link: "/our-expertise#industrial-automation",
    },
    {
      id: 3,
      image: "/IMG_7986.JPG",

      title: "Oil & Gas",
      link: "/our-expertise#oil-gas",
    },
    {
      id: 4,

      image: "/IMG_7987.WEBP",
      title: "Utilities",
      link: "/our-expertise#utilities",
    },

    {
      id: 5,
      image: "/IMG_8009.JPG",
      title: "Power",
      link: "/our-expertise#power",
    },
    {
      id: 6,

      image: "/IMG_7991.JPG",
      title: "Power Distribution Equipments",
      link: "/our-expertise#power-distribution-equipment",
    },
    {
      id: 7,
      image: "/Automotive.png",
      title: "Automotive Engineering",
      link: "/our-expertise#automotive-engineering",
    },
    {
      id: 8,
      image: "/Electronic_Engineering.WEBP",
      title: "Electronic Engineering",
      link: "/our-expertise#electronic-engineering",
    },
    {
      id: 9,
      image: "/Mining_Engineering.png",
      title: "Mining Engineering",
      link: "/our-expertise#mining-engineering",
    },
    {
      id: 10,
      image: "/Power_System_Studies.png",
      title: "Power System Studies",
      link: "/our-expertise#power_system_studies",
    },
    {
      id: 11,
      image: "/Analysis_Simulation.png",
      title: "Analysis & Simulation",
      link: "/our-expertise#analysis_and_simulation",
    },
    {
      id: 12,
      image: "/Solar_Power_Plant.png",
      title: "Solar Power Plant",
      link: "/our-expertise#solar_power_plant",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#07152f] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-brand-primary" />
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">Our Expertise</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100/70">
          Cross-industry engineering knowledge backed by practical delivery experience.
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="mt-10 w-full cursor-pointer"
      >
        <div className="mb-5 mt-4 flex justify-end gap-2">
          <CarouselPrevious className="relative inset-0 h-10 w-10 translate-y-0 border-white/20 bg-white/10 text-white hover:bg-brand-primary hover:text-white" />
          <CarouselNext className="relative inset-0 h-10 w-10 translate-y-0 border-white/20 bg-white/10 text-white hover:bg-brand-primary hover:text-white" />
        </div>
        <CarouselContent className="-ml-3">
          {items.map((item) => (
            <CarouselItem key={item.id} className="basis-full pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="overflow-hidden rounded-2xl border border-white/10 bg-blue-950 py-0 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.85)]">
                <CardContent className="group relative aspect-[4/5] cursor-pointer overflow-hidden p-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152f] via-[#07152f]/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="z-10 text-center text-2xl font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]">
                      {item.title}
                    </h3>

                    <div className="z-10 mt-5 flex translate-y-2 justify-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <Link href={item.link}>
                        <Button
                          className="group/button cursor-pointer bg-brand-primary text-white hover:bg-blue-500"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>{" "}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
    </section>
  );
}
