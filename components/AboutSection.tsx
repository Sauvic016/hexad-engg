import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="mx-20 pt-24 bg-gradient-to-b from-blue-50/30 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Who We Are</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Our team of global professionals combines technical expertise with the latest technologies to ensure every
              project meets the highest standards of quality and safety. We&apos;re proud of the lasting relationships
              we&apos;ve built with clients and partners across the region. Let&apos;s build something great together.
            </p>

            <div className="pt-4">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-6 py-5 rounded-lg text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-blue-600/10 z-10 rounded-2xl"></div>
              <Image
                src="/who-we-are.jpg"
                alt="HEXAD Engineering LLP Team"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
