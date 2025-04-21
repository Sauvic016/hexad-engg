"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

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
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-20`}
    >
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <div className="h-64 md:h-80 relative">
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-blue-600">{iconComponent}</div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-600 mb-6 flex-grow">{description}</div>
      </div>
    </div>
  );
};

export default ProductCard;
