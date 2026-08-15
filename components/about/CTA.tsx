import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#07152f] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-5 h-1 w-20 bg-brand-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Build With Us</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Join Our Growing Team</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-blue-100/70">
              We&apos;re looking for passionate individuals who want to make an impact. Discover opportunities that
              match your skills and ambitions.
              </p>
            </div>
            <Link
              href="/careers"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Careers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
