"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-slate-50 py-8 md:py-12">
      {/* <div className="container w-full lg:mx-auto "> */}
      <div className="w-full grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-4">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="block">
              <Image src="/logo.png" alt="HEXAD Engineering LLP" width={145} height={50} />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Innovative solutions for tomorrow&apos;s challenges. We help businesses transform, innovate, and thrive.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/what-we-do" className="text-muted-foreground hover:text-foreground transition-colors">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/our-expertise" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Expertise
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="text-muted-foreground">Email: info@hexadengg.com</p>
            </li>
            <li>
              <p className="text-muted-foreground">Phone: +1 713 347 3054</p>
            </li>
            <li className="text-muted-foreground space-y-2">
              {/* <p className="text-muted-foreground">
                Ground Floor, E1 Block (Beech),
                <br />
                Manyata Embassy Business Park,
                <br />
                Outer Ring Road, Bangalore
                <br />
                560045, India.
              </p> */}

              <p>
                Registered address: 1st Floor, No. 12 & 13, Nanda Gokula Complex, 16th A Cross Road, Hebbal Kempapura,
                Bengaluru, Karnataka, 560024, India
              </p>
            </li>
          </ul>
        </div>

        {/* Newsletter and Social */}
        <div className="space-y-4 col-span-1">
          <h3 className="text-lg font-medium">Connect</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              target="_blank"
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="min-w-0 flex-1" required />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} HEXAD. All rights reserved.</p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
