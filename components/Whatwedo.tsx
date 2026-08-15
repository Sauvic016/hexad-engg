"use client";
import React from "react";
import { ArrowRight, Code2, Server } from "lucide-react";
import Link from "next/link";

const Whatwedo = () => {
  return (
    <section
      id="services"
      className="overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-10 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-16">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-brand-primary" />

          <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl uppercase">What We Do</h2>
        </div>

        <div className="space-y-8 lg:space-y-12">
          <article className="grid overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_20px_60px_-35px_rgba(15,43,91,0.35)] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-brand-primary">
                  <Code2 className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 sm:text-3xl">Product Design</h3>
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">
                We create smart, user-focused solutions by combining creativity, strategy, and technical precision—
                transforming early concepts into dependable, market-ready products.
              </p>
              <Link
                href="/what-we-do#product-design"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Product Design
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative min-h-72 overflow-hidden bg-blue-950 lg:min-h-[430px]">
              <video
                src={`${process.env.NEXT_PUBLIC_PRODUCT_DESIGN_VIDEO_URL}`}
                poster="/video-background/Product_sj3adt.avif"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent" />
            </div>
          </article>

          <article className="grid overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_20px_60px_-35px_rgba(15,43,91,0.35)] lg:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden bg-blue-950 lg:min-h-[430px]">
              <video
                src={`${process.env.NEXT_PUBLIC_PLANT_DESIGN_VIDEO_URL}`}
                poster="/video-background/Plant.avif"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-brand-primary">
                  <Server className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 sm:text-3xl">Plant Engineering</h3>
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">
                We engineer efficient, reliable, and future-ready industrial systems. From design through execution, our
                integrated approach improves performance, strengthens safety, and reduces downtime.
              </p>
              <Link
                href="/what-we-do#plant-engineering"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Plant Engineering
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
