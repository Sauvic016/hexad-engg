"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Add debug logging when sidebar state changes

  // Function to handle menu button click
  const handleMenuClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Overlay when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar - simplified version */}
      <div
        className={`fixed top-0 right-0 h-full z-100 md:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-screen w-[280px] sm:w-[320px] bg-white shadow-xl flex flex-col">
          <div className="h-20 pt-4 px-4 flex-shrink-0  border-b">
            <div className="pl-2 text-xl font-semibold justify-between flex items-center pt-1 text-brand-primary">
              Menu
              <Button variant="ghost" className="p-2 h-auto w-auto" onClick={() => setSidebarOpen(false)}>
                <X className="h-10 w-10" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-4 flex flex-col items-center">
              <Link
                href="/"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>Home</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>About</span>
              </Link>

              <Link
                href="/our-expertise"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>Our Expertise</span>
              </Link>

              <Link
                href="/what-we-do"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>What we do</span>
              </Link>

              <Link
                href="/careers"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>Careers</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setSidebarOpen(false)}
              >
                <span>Contact</span>
              </Link>

              <div className="my-2 border-t border-gray-200"></div>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        <Navbar onMenuClick={handleMenuClick} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
