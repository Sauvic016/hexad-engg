"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-b from-white to-gray-50 ">
    //   <div className="container mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
    //       {/* Logo and Description */}
    //       <div className="space-y-6">
    //         <Link href="/" className="block">
    //           <Image src="/logo.png" alt="HEXAD Engineering LLP" width={145} height={50} />
    //         </Link>
    //         <p className="text-muted-foreground">
    //           A multidisciplinary engineering and design firm dedicated to delivering innovative solutions.
    //         </p>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
    //         <ul className="space-y-3">
    //           <li>
    //             <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/services"
    //               className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    //             >
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/about"
    //               className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    //             >
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/careers"
    //               className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    //             >
    //               Careers
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="/contact"
    //               className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Contact Us */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
    //         <ul className="space-y-3">
    //           <li>
    //             <a
    //               href="mailto:info@hexadengg.com"
    //               className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
    //             >
    //               info@hexadengg.com
    //             </a>
    //           </li>
    //           <li>
    //             <div className="flex items-start ">
    //               <p className="text-muted-foreground">+91-7002020041</p>
    //             </div>
    //           </li>
    //           <li>
    //             <div className="flex ">
    //               <p className="text-muted-foreground">
    //                 Ground Floor,E1 Block (Beech),
    //                 <br />
    //                 Manyata Embassy Business Park, Outer Ring Road, Bangalore
    //                 <br />
    //                 560045, India.
    //               </p>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Newsletter */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
    //         <p className="text-muted-foreground mb-4">
    //           Subscribe to our newsletter for the latest updates and insights.
    //         </p>
    //         <form className="space-y-2">
    //           <Input type="email" placeholder="Enter your email" className="bg-background" />
    //           <Button
    //             type="submit"
    //             className="w-full cursor-pointer px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:from-blue-700 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           >
    //             Subscribe
    //           </Button>
    //         </form>
    //       </div>
    //     </div>

    //     {/* Copyright and Social Links */}
    //     <div className="border-t border-border py-6">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <p className="text-sm text-muted-foreground">© 2025 HEXAD Engineering LLP. All rights reserved.</p>
    //         <div className="flex items-center gap-4">
    //           <a
    //             target="_blank"
    //             href="https://www.instagram.com/invites/contact/?igsh=1sl54ksi67lea&utm_content=vzay5wm"
    //             className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 hover:text-blue-700 transition-colors duration-200"
    //             aria-label="Instagram"
    //           >
    //             <Instagram className="h-4 w-4" />
    //           </a>
    //           <a
    //             target="_blank"
    //             href="https://www.linkedin.com/company/hexad/"
    //             className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 hover:text-blue-700 transition-colors duration-200"
    //             aria-label="LinkedIn"
    //           >
    //             <Linkedin className="h-4 w-4" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full border-t bg-slate-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="block">
                <Image src="/logo.png" alt="HEXAD Engineering LLP" width={145} height={50} />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovative solutions for tomorrow&apos;s challenges. We help businesses transform, innovate, and thrive.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-muted-foreground hover:text-foreground">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="text-muted-foreground">Email: info@hexadengg.com</p>
              </li>
              <li>
                <p className="text-muted-foreground">Phone: +1 713 347 3054 </p>
              </li>

              <li>
                <p className="text-muted-foreground">
                  Ground Floor,E1 Block (Beech),
                  <br />
                  Manyata Embassy Business Park, Outer Ring Road, Bangalore
                  <br />
                  560045, India.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HEXAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
