"use client";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  image: StaticImageData | string;
  className?: string;
}

export default function ServiceCard({ icon, title, description, image, className }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5, boxShadow: "0 18px 38px -18px rgba(0, 0, 0, 0.32)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-blue-100 bg-white shadow-md transition-shadow duration-300",
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
        <Image
          src={image}
          alt={`${title} service`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10">
        <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-primary shadow-md">
          <div className="flex h-7 w-7 items-center justify-center brightness-0 invert">{icon}</div>
        </div>

        <h3 className="mb-2 text-lg font-bold uppercase text-blue-950">{title}</h3>
        <div className="pr-10 text-sm leading-relaxed text-gray-600">{description}</div>

        {/* <div
          className="mt-auto ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white shadow-sm"
          role="img"
          aria-label={`Read more about ${title}`}
          title={`Read more about ${title}`}
        >
           <ArrowRight className="h-5 w-5" aria-hidden="true" /> 
        </div> */}
      </div>
    </motion.article>
  );
}
