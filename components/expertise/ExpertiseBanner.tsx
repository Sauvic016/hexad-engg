"use client";

import Image from "next/image";
import { Clock3, Lightbulb, ShieldCheck, Users } from "lucide-react";
import expertiseWater from "@/public/exp-1.avif";
import expertiseMining from "@/public/exp-2.avif";
import expertiseOilGas from "@/public/exp-3.avif";
import expertiseAnalysis from "@/public/exp-4.avif";
import expertiseRenewable from "@/public/exp-5.avif";
import expertiseHero from "@/public/expertise-banner.webp";

const strengths = [
  { icon: Users, title: "Client Focused", description: "Your goals drive our solutions." },
  { icon: ShieldCheck, title: "Quality Assured", description: "High standards in every deliverable." },
  { icon: Lightbulb, title: "Innovative Approach", description: "Smart engineering for a better tomorrow." },
  { icon: Clock3, title: "On-Time Delivery", description: "Committed to timelines you can count on." },
];

const outerShape = "M 180 0 C 100 145, 65 390, 185 610 L 720 610 L 720 0 Z";

export default function ExpertiseBanner() {
  return (
    <section className="relative overflow-hidden bg-[#06152f] text-white lg:min-h-[610px]">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={expertiseHero}
          alt="HEXAD engineering expertise"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center brightness-[0.58] saturate-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06152f]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-primary/15 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152f]/90 via-[#06152f]/35 to-[#06152f]/55" />
      </div>

      <svg
        className="absolute inset-y-0 right-0 z-[2] hidden h-full w-[51%] lg:block"
        viewBox="0 0 720 610"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="HEXAD expertise across water, mining, oil and gas, analysis, and renewable energy"
      >
        <defs>
          <clipPath id="expertise-outer-shape">
            <path d={outerShape} />
          </clipPath>
          <clipPath id="expertise-water-shape">
            <path d="M 0 0 H 425 L 337 303 H 0 Z" />
          </clipPath>
          <clipPath id="expertise-oil-shape">
            <path d="M 0 307 H 335 L 245 610 H 0 Z" />
          </clipPath>
          <clipPath id="expertise-mining-shape">
            <path d="M 430 0 H 625 L 538 303 H 340 Z" />
          </clipPath>
          <clipPath id="expertise-analysis-shape">
            <path d="M 338 307 H 536 L 448 610 H 248 Z" />
          </clipPath>
          <clipPath id="expertise-renewable-shape">
            <path d="M 630 0 H 720 V 610 H 452 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#expertise-outer-shape)">
          <image
            href={expertiseWater.src}
            width="440"
            height="303"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#expertise-water-shape)"
          />
          <image
            href={expertiseOilGas.src}
            y="307"
            width="350"
            height="303"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#expertise-oil-shape)"
          />
          <image
            href={expertiseMining.src}
            x="330"
            width="305"
            height="303"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#expertise-mining-shape)"
          />
          <image
            href={expertiseAnalysis.src}
            x="238"
            y="307"
            width="310"
            height="303"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#expertise-analysis-shape)"
          />
          <path d="M 0 305 H 337" fill="none" stroke="#06152f" strokeWidth="6" />
          <path d="M 338 305 H 538" fill="none" stroke="#06152f" strokeWidth="6" />
          <path d="M 425 0 L 245 610" fill="none" stroke="#06152f" strokeWidth="6" />
          <path d="M 628 0 L 450 610" fill="none" stroke="#06152f" strokeWidth="6" />
          <path d={outerShape} fill="none" stroke="#2563eb" strokeWidth="5" />
          <path d={outerShape} fill="#06152f" fillOpacity="0.08" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[51%] lg:block">
        <div className="absolute inset-y-0 right-0 w-[38.2%] overflow-hidden [clip-path:polygon(67%_0,100%_0,100%_100%,2.5%_100%)]">
          <Image
            src={expertiseRenewable}
            alt="Renewable energy engineering"
            fill
            priority
            fetchPriority="high"
            unoptimized
            className="object-cover object-center"
            sizes="20vw"
          />
          <div className="absolute inset-0 bg-[#06152f]/8" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-7xl items-center px-4 py-14 sm:min-h-[650px] sm:px-6 sm:py-16 lg:min-h-[610px] lg:px-8 lg:py-20">
        <div className="w-full lg:max-w-[49%]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 sm:text-sm">Industries We Serve</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem] xl:text-[3.35rem]">
            Engineered Solutions.
            <span className="block text-brand-primary">Real Impact Across Industries.</span>
          </h1>
          <div className="mt-6 h-0.5 w-14 bg-brand-primary" />

          <p className="mt-6 max-w-xl text-sm leading-6 text-blue-100/75 sm:text-base sm:leading-7">
            At HEXAD Engineering, we partner with businesses across diverse industries to solve complex engineering
            challenges with precision and reliability. Our solutions are innovative, cost-effective, and built around
            your goals.
          </p>

          <div className="mt-9 grid gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-2 xl:grid-cols-4">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-3 xl:block">
                <Icon className="h-6 w-6 shrink-0 text-brand-primary xl:mb-3" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <h2 className="text-xs font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-[11px] leading-4 text-blue-100/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
