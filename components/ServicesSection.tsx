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
      link: "/services/water-treatment",
    },

    {
      id: 2,
      image: "/IMG_7985.JPG",

      title: "Industrial Automation",
      link: "/services/industrial-automation",
    },
    {
      id: 3,
      image: "/IMG_7986.JPG",

      title: "Oil & Gas",
      link: "/services/oil-gas",
    },
    {
      id: 4,

      image: "/IMG_7987.WEBP",
      title: "Utilities",
      link: "/services/utilities",
    },

    {
      id: 5,
      image: "/IMG_7989.WEBP",
      title: "Power",
      link: "/services/power",
    },
    {
      id: 6,

      image: "/IMG_7991.JPG",
      title: "Power Distribution Equipments",
      link: "/services/power-distribution-equipment",
    },
  ];

  return (
    <div className="w-full  mx-auto px-4 py-10 mt-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Expertise</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
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
        className="w-full mt-10 cursor-pointer"
      >
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0 h-9 w-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900" />
          <CarouselNext className="relative inset-0 translate-y-0 h-9 w-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900" />
        </div>
        <CarouselContent className="-ml-0 -mr-0">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-0 pr-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="border-0 rounded-none overflow-hidden shadow-none">
                <CardContent className="p-0 relative aspect-square group cursor-pointer">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover " />
                  <div className="absolute inset-0 bg-slate-100/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-between  p-6">
                    {/* Title always visible, changes color on hover */}
                    <div></div>
                    <h3 className="text-white font-bold text-center text-4xl z-10 transition-colors duration-300  group-hover:font-extrabold">
                      {item.title}
                    </h3>

                    {/* Button only visible on hover */}
                    <div className="flex justify-center mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <Link href={item.link}>
                        <Button
                          variant="outline"
                          className=" p-4 bg-white cursor-pointer  border-white  hover:bg-white hover:text-black transition-colors"
                        >
                          Read More <ArrowRight />
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
  );
}
