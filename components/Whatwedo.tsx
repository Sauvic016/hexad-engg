"use client";
import React from "react";
import { Button } from "./ui/button";
import { Code2, Server } from "lucide-react";

const Whatwedo = () => {
  return (
    <section id="services" className="mx-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What We Do</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* First service - Product Design */}
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12 mb-20 mx-4">
          {/* Text content - always first on mobile */}
          <div className="space-y-4 order-1">
            <h3 className="text-2xl font-bold flex gap-2 items-center">
              <Code2 className="h-12 w-12 text-blue-600" />
              Product Design
            </h3>
            <p className="text-muted-foreground">
              At our company, product design is about creating smart, user-focused solutions that look great and work
              seamlessly. We combine creativity, strategy, and technical precision to bring ideas to life—turning
              concepts into impactful, market-ready products that people love to use.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>

          {/* Video content - second on mobile, right on desktop */}
          <div className="flex justify-center order-2">
            <div className="w-full h-full">
              <video
                src={`${process.env.NEXT_PUBLIC_PRODUCT_DESIGN_VIDEO_URL}`}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg object-cover w-full h-full"
              ></video>
            </div>
          </div>
        </div>

        {/* Second service - Plant Engineering */}
        <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12 mb-20 mx-4">
          {/* Text content - always first on mobile */}
          <div className="space-y-4 order-1">
            <h3 className="text-2xl font-bold flex gap-2 items-center">
              <Server className="h-12 w-12 text-blue-600" /> Plant Engineering
            </h3>
            <p className="text-muted-foreground">
              We engineer efficient, reliable, and future-ready industrial systems. With end-to-end expertise—from
              design to execution—we optimize performance, ensure safety, and reduce downtime across every stage of
              operation.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>

          {/* Video content - second on mobile, left on desktop */}
          <div className="flex justify-center order-2 lg:order-first">
            <div className="w-full h-full">
              <video
                src={`${process.env.NEXT_PUBLIC_PLANT_DESIGN_VIDEO_URL}`}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg object-cover w-full h-full"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
