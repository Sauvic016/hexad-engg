"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-slate-50 py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="block">
                <Image src="/logo-1.png" alt="HEXAD Engineering LLP" width={145} height={50} />
              </Link>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Innovative solutions for tomorrow&apos;s challenges. We help businesses transform, innovate, and thrive.
            </p>
          </div>

          <div className="space-y-4 lg:pl-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-muted-foreground transition-colors hover:text-foreground">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/our-expertise" className="text-muted-foreground transition-colors hover:text-foreground">
                  Our Expertise
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-muted-foreground">Email: info@hexadengg.com</p>
              </li>
              <li>
                <p className="text-muted-foreground">Phone: +1 713 347 3054</p>
              </li>
              <li className="max-w-sm text-muted-foreground">
                <p className="leading-relaxed">
                  Registered address: 1st Floor, No. 12 &amp; 13, Nanda Gokula Complex, 16th A Cross Road, Hebbal
                  Kempapura, Bengaluru, Karnataka, 560024, India
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
              <form className="flex flex-col gap-2 xl:flex-row">
                <Input type="email" placeholder="Enter your email" className="min-w-0 flex-1 bg-white" required />
                <Button type="submit" size="sm" className="whitespace-nowrap bg-blue-600 text-white hover:bg-blue-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HEXAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
