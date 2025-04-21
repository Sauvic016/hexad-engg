"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  years: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Product Designer",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote:
        "Working here has been the highlight of my career. I'm constantly challenged to grow while being supported by incredible teammates who are as passionate about design as I am.",
      years: "4 years",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Engineering Manager",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote:
        "The culture of innovation is real here. I've never worked at a company that so perfectly balances ambitious goals with a sustainable approach to achieving them.",
      years: "3 years",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Customer Success Lead",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote:
        "The growth opportunities have been amazing. I joined as a representative and have been promoted twice in two years, with leadership investing in my development every step of the way.",
      years: "2 years",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from the talented individuals who make our company special.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isAnimating ? "opacity-90" : "opacity-100"
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <Image
                          src={"/testimonial.jpg"}
                          alt={testimonial.name}
                          width={580}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                        <div className="text-blue-400 mb-6">
                          <Quote className="w-12 h-12 opacity-50" />
                        </div>
                        <blockquote className="text-lg md:text-xl italic mb-8">{testimonial.quote}</blockquote>
                        <div>
                          <p className="font-semibold text-xl">{testimonial.name}</p>
                          <p className="text-gray-400">
                            {testimonial.role} • {testimonial.years}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex gap-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors duration-300"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-2">
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors duration-300"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
