import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-brand-primary" />
          <h2 className="text-3xl font-bold uppercase tracking-tight text-blue-950 md:text-5xl">Who We Are</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
            A multidisciplinary engineering partner helping ambitious ideas become dependable real-world solutions.
          </p>
        </div>

        <div className="relative isolate overflow-hidden rounded-3xl bg-[#07152f] shadow-[0_30px_80px_-40px_rgba(7,21,47,0.75)]">
          <div className="absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Engineering With Purpose
              </p>
              <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Global expertise. Practical engineering. Lasting partnerships.
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed text-blue-100/75 md:text-lg">
                Our global professionals combine technical depth with modern technology to deliver work grounded in
                quality, safety, and real project needs. We stay close to every challenge—from the first conversation to
                the final outcome.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white">
                  <Globe2 className="h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                  Global Perspective
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                  Technical Precision
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                  Quality &amp; Safety
                </div>
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-blue-400/60 pb-1.5 text-sm font-semibold text-blue-300 transition hover:border-white hover:text-white"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative min-h-[380px] border-t border-white/10 lg:min-h-[640px] lg:border-l lg:border-t-0">
              <Image
                src="/who-we-are.avif"
                alt="HEXAD Engineering LLP Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-brand-primary/15 mix-blend-color" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07152f]/80 via-transparent to-[#07152f]/10" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#07152f]/80 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">The HEXAD Approach</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-white">
                  Engineering clarity into every stage of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
