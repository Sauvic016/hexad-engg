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
    <div
      ref={cardRef}
      id={id}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-20`}
    >
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* <Card className="bg-red-300">
        <CardContent className="p-0  aspect-square group cursor-pointer">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover " />
        </CardContent>
      </Card> */}

      <div className="w-full lg:w-1/2 p-4 sm:p-5 lg:p-6 flex flex-col">
        <div className="flex items-center mb-2 sm:mb-3">
          <div className="mr-3 text-gray-600">{iconComponent}</div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-primary">{title}</h3>
        </div>
        <div className="text-gray-600 text-sm sm:text-base flex-grow overflow-y-auto pr-2 max-h-[300px] lg:max-h-none">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
