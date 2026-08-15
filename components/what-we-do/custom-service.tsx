"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomService() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="relative isolate overflow-hidden rounded-2xl bg-[#07152f] px-6 py-10 shadow-[0_24px_70px_-35px_rgba(7,21,47,0.65)] sm:px-10 sm:py-12 lg:px-14"
    >
      <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-5 h-1 w-20 bg-blue-600" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Built Around Your Needs</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Looking for a Custom Solution?</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-blue-100/75">
            Every engineering challenge is different. Tell us what you are building, and our team will shape the right
            combination of expertise, technology, and delivery support for your project.
          </p>
        </div>

        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152f]"
        >
          Discuss Your Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.section>
  );
}
