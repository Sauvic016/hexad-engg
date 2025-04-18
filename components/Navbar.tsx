"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  pathname: string;
}

const NavItem = ({ href, label, pathname }: NavItemProps) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-2 py-2 text-base font-medium transition-colors duration-200
      ${
        isActive
          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200 after:scale-x-100"
          : "text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100"
      }`}
    >
      <span>{label}</span>
    </Link>
  );
};

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center">
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <Image src="/logo.png" alt="HEXAD Engineering LLP" width={145} height={50} priority />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
            <NavItem href="/" label="Home" pathname={pathname} />
            <NavItem href="/about" label="About" pathname={pathname} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="group relative flex items-center gap-2 py-2 text-base font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground"
                >
                  <span>Services</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>
                  <Link href="/services/1" className="w-full">
                    Engineering Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/2" className="w-full">
                    Design Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/3" className="w-full">
                    Web and App Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/4" className="w-full">
                    Analysis Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/5" className="w-full">
                    Development Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/6" className="w-full">
                    Other Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavItem href="/contact" label="Contact" pathname={pathname} />
            <NavItem href="/careers" label="Careers" pathname={pathname} />
            <NavItem href="/blogs" label="Blogs" pathname={pathname} />
          </div>

          <div className="flex-1 flex items-center justify-end gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-md transition-colors duration-200 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
