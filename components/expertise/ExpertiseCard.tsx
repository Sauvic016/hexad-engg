"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import { Card, CardContent } from "../ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  description: string | React.JSX.Element;
  imageUrl: string;
  iconComponent: React.ReactNode;
  isReversed?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  description,
  imageUrl,
  iconComponent,
  isReversed = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if this card's ID matches the URL hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === id && cardRef.current) {
        // Add a slight delay to ensure the element is fully rendered
        setTimeout(() => {
          // Calculate header height (if you have a fixed header)
          const headerHeight = 80; // Adjust this value based on your header height

          // Get the element's position
          const elementPosition = cardRef.current?.getBoundingClientRect().top || 0;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  }, [id]);

  return (
    <article
      ref={cardRef}
      id={id}
      className="grid scroll-mt-24 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_20px_60px_-38px_rgba(7,21,47,0.38)] lg:grid-cols-2"
    >
      <div className={`relative min-h-[300px] bg-blue-950 lg:min-h-[430px] ${isReversed ? "lg:order-2" : ""}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
      </div>

      <div className={`flex flex-col justify-center p-7 sm:p-9 lg:p-12 ${isReversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-brand-primary [&_svg]:h-6 [&_svg]:w-6 [&_svg]:stroke-[1.7]">
            {iconComponent}
          </div>
          <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">{title}</h2>
        </div>
        <div className="mt-5 max-h-[320px] flex-grow overflow-y-auto pr-3 text-sm leading-relaxed text-gray-600 sm:text-base [&_li]:pl-1 [&_li::marker]:text-brand-primary [&_strong]:font-semibold [&_strong]:text-blue-950 lg:max-h-[360px]">
          {description}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
