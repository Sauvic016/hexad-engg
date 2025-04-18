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

  return (
    <body>
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />

          {/* Sidebar Content */}
          <div className="fixed right-0 top-0 bottom-0 w-[280px] bg-background p-6 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="space-y-6">
              <Link
                href="/"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/blogs"
                className="block text-lg font-medium hover:text-primary"
                onClick={() => setSidebarOpen(false)}
              >
                Blogs
              </Link>
              <div className="pt-2 border-t">
                <h3 className="text-lg font-medium mb-4">Services</h3>
                <div className="space-y-3 pl-2">
                  <Link
                    href="/services/1"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Engineering Services
                  </Link>
                  <Link
                    href="/services/2"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Design Services
                  </Link>
                  <Link
                    href="/services/3"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Web and App Development
                  </Link>
                  <Link
                    href="/services/4"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Analysis Services
                  </Link>
                  <Link
                    href="/services/5"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Development Services
                  </Link>
                  <Link
                    href="/services/6"
                    className="block text-md text-muted-foreground hover:text-primary"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Other Services
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Toaster />
    </body>
  );
}
