"use client";
import React from "react";
// import { ChevronDown } from "lucide-react";
import Image from "next/image";

const ProductsBanner: React.FC = () => {
  // const scrollToProducts = () => {
  //   const productsSection = document.getElementById("products-section");
  //   if (productsSection) {
  //     productsSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    // <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
    //   <div
    //     className="absolute inset-0 bg-cover bg-center"
    //     style={{
    //       backgroundImage:
    //         "url(https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
    //       // backgroundPosition: "80% 30%",
    //     }}
    //   />
    //   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

    //   <div className="relative h-full flex flex-col justify-center items-center text-white p-6 md:p-12">
    //     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
    //       Engineered <span className="text-brand-primary">Excellence</span>
    //     </h1>
    //     <p className="text-xl md:text-2xl text-center max-w-2xl opacity-90 mb-8">
    //       Cutting-edge solutions across critical industries that power our world
    //     </p>

    //     <button
    //       onClick={scrollToProducts}
    //       className="mt-8 flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
    //       aria-label="Scroll to products"
    //     >
    //       <span className="text-sm uppercase tracking-wider mb-2">Discover Our Solutions</span>
    //       <ChevronDown className="animate-bounce" size={24} />
    //     </button>
    //   </div>
    // </div>

    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/expertise-banner.jpg"
          width={1920}
          height={1080}
          alt="Modern office space with team collaboration"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/70 z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Engineered <span className="text-brand-primary">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Cutting-edge solutions across critical industries that power our world for a better future
        </p>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#who-we-are"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/20"
              >
                Join Our Team
              </Link>
            </div> */}
      </div>
    </section>
  );
};

export default ProductsBanner;
